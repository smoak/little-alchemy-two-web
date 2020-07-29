import graphql from 'babel-plugin-relay/macro';
import { List, Box } from 'grommet';
import React, { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { ItemCombinationListComponent_item$key } from './__generated__/ItemCombinationListComponent_item.graphql';
import { ItemCombinationListPaginationQuery } from './__generated__/ItemCombinationListPaginationQuery.graphql';

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

function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
  return value !== null && value !== undefined;
}

export const ItemCombinationList: FC<ItemCombinationListProps> = ({ item }) => {
  const { data } = usePaginationFragment<ItemCombinationListPaginationQuery, ItemCombinationListComponent_item$key>(
    fragment,
    item
  );

  const edges = data.combinations.edges;

  if (!edges) {
    return <div>No combinations</div>;
  }

  const listData = edges.filter(notEmpty).map((e) => ({ source: e.node.source.name, target: e.node.target.name }));

  return (
    <Box pad="small">
      <List primaryKey="source" secondaryKey="target" data={listData} />
    </Box>
  );
};
