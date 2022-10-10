import graphql from 'babel-plugin-relay/macro';
import { Grid, InfiniteScroll, ResponsiveContext } from 'grommet';
import React, { FC, useContext } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { notEmpty } from '../../data/array';
import { ItemCombinationCard } from '../ItemCombinationCard/ItemCombinationCard';

import { ItemCombinationListComponent_item$key } from './__generated__/ItemCombinationListComponent_item.graphql';
import { ItemCombinationListPaginationQuery } from './__generated__/ItemCombinationListPaginationQuery.graphql';

const fragment = graphql`
  fragment ItemCombinationListComponent_item on Item
  @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 5 })
  @refetchable(queryName: "ItemCombinationListPaginationQuery") {
    combinations(after: $cursor, first: $count) @connection(key: "ItemCombinationList_item_combinations") {
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

interface ItemCombinationListProps {
  readonly item: ItemCombinationListComponent_item$key;
}

export const ItemCombinationList: FC<ItemCombinationListProps> = ({ item }) => {
  const { data, loadNext } = usePaginationFragment<
    ItemCombinationListPaginationQuery,
    ItemCombinationListComponent_item$key
  >(fragment, item);
  const onMore = () => {
    loadNext(10);
  };

  const edges = data.combinations.edges;

  if (!edges) {
    return <div>No combinations</div>;
  }

  const items = edges.filter(notEmpty);

  return (
    <InfiniteScroll items={items} onMore={onMore} step={10} show={2}>
      {(i: ItemCombination) => (
        <ItemCombinationCard
          key={i.node.source.id + i.node.target.id}
          source={i.node.source.name}
          target={i.node.target.name}
          sourceImageUrl={i.node.source.imageUrl}
          targetImageUrl={i.node.target.imageUrl}
        />
      )}
    </InfiniteScroll>
  );
};
