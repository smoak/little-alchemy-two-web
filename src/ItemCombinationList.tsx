import graphql from 'babel-plugin-relay/macro';
import { Box, Button, List } from 'grommet';
import React, { FC, useCallback } from 'react';
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
  const { data, loadNext, hasNext } = usePaginationFragment<
    ItemCombinationListPaginationQuery,
    ItemCombinationListComponent_item$key
  >(fragment, item);
  const onLoadNextClicked = useCallback(() => {
    loadNext(3);
  }, [loadNext]);

  const edges = data.combinations.edges;

  if (!edges) {
    return <div>No combinations</div>;
  }

  const listData = edges.filter(notEmpty).map((e) => ({ source: e.node.source.name, target: e.node.target.name }));

  const loadNextButton = hasNext ? <Button secondary label="Load More" onClick={onLoadNextClicked} /> : null;

  return (
    <Box pad="small">
      <List primaryKey="source" secondaryKey="target" data={listData} />
      <Box gap="xxsmall" pad="xxsmall">
        {loadNextButton}
      </Box>
    </Box>
  );
};
