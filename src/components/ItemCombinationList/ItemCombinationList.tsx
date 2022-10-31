import graphql from 'babel-plugin-relay/macro';
import { Box, Button, Grid } from 'grommet';
import { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { notEmpty } from '../../data/array';
import { ItemCombinationCard } from '../ItemCombinationCard/ItemCombinationCard';
import { ItemCombinationGlimmerCard } from '../ItemCombinationCard/ItemCombinationGlimmerCard';

import { ItemCombinationListComponent_item$key } from './__generated__/ItemCombinationListComponent_item.graphql';
import { ItemCombinationListPaginationQuery } from './__generated__/ItemCombinationListPaginationQuery.graphql';

const fragment = graphql`
  fragment ItemCombinationListComponent_item on Item @refetchable(queryName: "ItemCombinationListPaginationQuery") {
    name
    combinations(after: $cursor, first: $count) @connection(key: "ItemCombinationList_item_combinations") {
      edges {
        node {
          ...ItemCombinationCardComponent_itemCombination
        }
      }
    }
  }
`;

interface ItemCombinationListProps {
  readonly item: ItemCombinationListComponent_item$key;
}

export const ItemCombinationList: FC<ItemCombinationListProps> = ({ item }) => {
  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    ItemCombinationListPaginationQuery,
    ItemCombinationListComponent_item$key
  >(fragment, item);
  const onMore = () => {
    loadNext(10);
  };

  const edges = data.combinations.edges;
  const items = edges?.filter(notEmpty);

  if (!items || items.length === 0) {
    return <div>No combinations</div>;
  }

  return (
    <>
      <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small">
        {items.map((i, index) => (
          <ItemCombinationCard key={index} itemCombination={i.node} />
        ))}
        {isLoadingNext && <ItemCombinationGlimmerCard />}
      </Grid>
      {hasNext && (
        <Box direction="row" align="center" pad="medium" gap="medium">
          <Button primary onClick={onMore} label="load more" />
        </Box>
      )}
    </>
  );
};
