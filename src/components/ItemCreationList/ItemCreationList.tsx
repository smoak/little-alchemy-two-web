import graphql from 'babel-plugin-relay/macro';
import { Box, Card, Image, InfiniteScroll, Text } from 'grommet';
import React, { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { notEmpty } from '../../data/array';
import { ItemLink } from '../ItemLink/ItemLink';

import { ItemCreationListComponent_item$key } from './__generated__/ItemCreationListComponent_item.graphql';
import { ItemCreationListPaginationQuery } from './__generated__/ItemCreationListPaginationQuery.graphql';

const fragment = graphql`
  fragment ItemCreationListComponent_item on Item
  @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 5 })
  @refetchable(queryName: "ItemCreationListPaginationQuery") {
    creates(after: $cursor, first: $count) @connection(key: "ItemCreationList_item_creates") {
      edges {
        node {
          source {
            id
            name
            imageUrl
            myths
          }
          target {
            id
            name
            imageUrl
            myths
          }
        }
      }
    }
  }
`;

interface ItemCreationListProps {
  readonly item: ItemCreationListComponent_item$key;
  readonly itemName: string;
  readonly itemImageUrl: string;
}

type Item = {
  readonly name: string;
  readonly myths: boolean;
  readonly imageUrl: string;
  readonly id: string;
};

type ItemCombination = {
  readonly node: {
    readonly source: Item;
    readonly target: Item;
  };
};

export const ItemCreationList: FC<ItemCreationListProps> = ({ item, itemImageUrl, itemName }) => {
  const { data, loadNext } = usePaginationFragment<ItemCreationListPaginationQuery, ItemCreationListComponent_item$key>(
    fragment,
    item
  );
  const onMore = () => {
    loadNext(10);
  };

  const edges = data.creates.edges;
  const items = edges?.filter(notEmpty);

  if (!items || items.length === 0) {
    return <Box pad="medium">This item does not create anything</Box>;
  }

  return (
    <InfiniteScroll items={items} onMore={onMore} step={10} show={2}>
      {(i: ItemCombination) => (
        <Card background="white" pad="xsmall" height="small" width="large" key={i.node.source.id + i.node.target.id}>
          <Box direction="row" pad="xsmall">
            <Box pad="small">
              <Box align="center" height="small" width="small">
                <Box height="xxsmall" width="xxsmall">
                  <Image fit="cover" src={i.node.source.imageUrl} />
                </Box>
                <Box pad="xsmall">
                  <ItemLink itemName={i.node.source.name}>{i.node.source.name}</ItemLink>
                </Box>
              </Box>
            </Box>
            <Box pad="small">
              <Box align="center" justify="center" height="small" width="small">
                <Text size="xlarge">+</Text>
              </Box>
            </Box>
            <Box pad="small">
              <Box align="center" height="small" width="small">
                <Box height="xxsmall" width="xxsmall">
                  <Image fit="cover" src={i.node.target.imageUrl} />
                </Box>
                <Box pad="xsmall">
                  <ItemLink itemName={i.node.target.name}>{i.node.target.name}</ItemLink>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box direction="column" pad="xsmall">
            <Box pad="small" direction="row" justify="center" align="center">
              <Box height="xxsmall" width="xxsmall">
                <Image fit="cover" src={itemImageUrl} />
              </Box>
              <Box pad="xsmall">
                <ItemLink itemName={itemName}>{itemName}</ItemLink>
              </Box>
            </Box>
          </Box>
        </Card>
      )}
    </InfiniteScroll>
  );
};
