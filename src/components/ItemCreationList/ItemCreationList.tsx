import graphql from 'babel-plugin-relay/macro';
import { Box, Text } from 'grommet';
import React, { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { notEmpty } from '../../data/array';
import { ItemLink } from '../ItemLink/ItemLink';
import { Item, ItemList } from '../ItemList/ItemList';

import { ItemCreationListComponent_item$key } from './__generated__/ItemCreationListComponent_item.graphql';
import { ItemCreationListPaginationQuery } from './__generated__/ItemCreationListPaginationQuery.graphql';

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
  return (
    <Box direction="row">
      <ItemLink itemName={item.source}>
        <Text key="p" weight="bold" margin="small">
          {item.source}
        </Text>
      </ItemLink>
      <Text>to make</Text>
      <ItemLink itemName={item.target}>
        <Text key="s" margin="small">
          {item.target}
        </Text>
      </ItemLink>
    </Box>
  );
};

export const ItemCreationList: FC<ItemCreationListProps> = ({ item }) => {
  const { data, loadNext } = usePaginationFragment<ItemCreationListPaginationQuery, ItemCreationListComponent_item$key>(
    fragment,
    item
  );
  const onMore = () => {
    loadNext(10);
  };

  const edges = data.creates.edges;

  if (!edges) {
    return <div>This item does not create anything</div>;
  }

  const items = edges.filter(notEmpty).map<Item>((e) => ({ source: e.node.source.name, target: e.node.target.name }));

  return (
    <ItemList
      items={items}
      onMore={onMore}
      render={({ item, index }) => <ItemCreation key={index} item={item} index={index} />}
    />
  );
};
