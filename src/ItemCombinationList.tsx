import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { Item, ItemList } from './ItemList';
import { ItemCombinationListComponent_item$key } from './__generated__/ItemCombinationListComponent_item.graphql';
import { ItemCombinationListPaginationQuery } from './__generated__/ItemCombinationListPaginationQuery.graphql';
import { notEmpty } from './data/array';

const fragment = graphql`
  fragment ItemCombinationListComponent_item on Item
    @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 3 })
    @refetchable(queryName: "ItemCombinationListPaginationQuery") {
    combinations(after: $cursor, first: $count) @connection(key: "ItemCombinationList_item_combinations") {
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

interface ItemCombinationListProps {
  readonly item: ItemCombinationListComponent_item$key;
}

export const ItemCombinationList: FC<ItemCombinationListProps> = ({ item }) => {
  const { data, loadNext, hasNext } = usePaginationFragment<
    ItemCombinationListPaginationQuery,
    ItemCombinationListComponent_item$key
  >(fragment, item);

  const edges = data.combinations.edges;

  if (!edges) {
    return <div>No combinations</div>;
  }

  const items = edges.filter(notEmpty).map<Item>((e) => ({ source: e.node.source.name, target: e.node.target.name }));

  return <ItemList items={items} hasNext={hasNext} loadNext={loadNext} />;
};
