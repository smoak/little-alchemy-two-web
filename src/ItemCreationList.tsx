import graphql from 'babel-plugin-relay/macro';
import { Anchor, Box, Button, List, Text } from 'grommet';
import React, { FC, useCallback } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { Item } from './ItemList';
import { ItemCreationListComponent_item$key } from './__generated__/ItemCreationListComponent_item.graphql';
import { ItemCreationListPaginationQuery } from './__generated__/ItemCreationListPaginationQuery.graphql';
import { notEmpty } from './data/array';

const fragment = graphql`
  fragment ItemCreationListComponent_item on Item
    @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 3 })
    @refetchable(queryName: "ItemCreationListPaginationQuery") {
    creates(after: $cursor, first: $count) @connection(key: "ItemCreationList_item_creates") {
      edges {
        node {
          source {
            id
            name
          }
          target {
            id
            name
          }
        }
      }
    }
  }
`;

interface ItemCreationListProps {
  readonly item: ItemCreationListComponent_item$key;
}

interface ItemCreationProps {
  readonly item: Item;
  readonly index: number;
  readonly state?: {
    readonly active: boolean;
  };
}
const ItemCreation: FC<ItemCreationProps> = ({ item }) => {
  const sourceHref = `/item/${item.source}`;
  const targetHref = `/item/${item.target}`;

  return (
    <Box direction="row">
      <Anchor href={sourceHref}>
        <Text key="p" weight="bold" margin="small">
          {item.source}
        </Text>
      </Anchor>
      <Text>to make</Text>
      <Anchor href={targetHref}>
        <Text key="s" margin="small">
          {item.target}
        </Text>
      </Anchor>
    </Box>
  );
};

export const ItemCreationList: FC<ItemCreationListProps> = ({ item }) => {
  const { data, loadNext, hasNext } = usePaginationFragment<
    ItemCreationListPaginationQuery,
    ItemCreationListComponent_item$key
  >(fragment, item);
  const onLoadNextClicked = useCallback(() => {
    loadNext(3);
  }, [loadNext]);

  const edges = data.creates.edges;

  if (!edges) {
    return <div>This item does not create anything</div>;
  }

  const loadNextButton = hasNext ? <Button secondary label="Load More" onClick={onLoadNextClicked} /> : null;
  const items = edges.filter(notEmpty).map<Item>((e) => ({ source: e.node.source.name, target: e.node.target.name }));

  return (
    <Box pad="small">
      <List step={3} data={items}>
        {(item: Item, index: number) => <ItemCreation item={item} index={index} />}
      </List>
      <Box gap="xxsmall" pad="xxsmall">
        {loadNextButton}
      </Box>
    </Box>
  );
};
