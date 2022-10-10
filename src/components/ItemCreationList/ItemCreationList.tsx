import graphql from 'babel-plugin-relay/macro';
import { Box, Button, Grid } from 'grommet';
import { FC } from 'react';
import { usePaginationFragment } from 'react-relay/hooks';

import { notEmpty } from '../../data/array';
import { ItemCreationCard } from '../ItemCreationCard/ItemCreationCard';

import { ItemCreationListComponent_item$key } from './__generated__/ItemCreationListComponent_item.graphql';
import { ItemCreationListPaginationQuery } from './__generated__/ItemCreationListPaginationQuery.graphql';

const fragment = graphql`
  fragment ItemCreationListComponent_item on Item @refetchable(queryName: "ItemCreationListPaginationQuery") {
    name
    imageUrl
    creates(after: $cursor, first: $count) @connection(key: "ItemCreationList_item_creates") {
      edges {
        node {
          ...ItemCreationCardComponent_itemCombination
        }
      }
    }
  }
`;

interface ItemCreationListProps {
  readonly item: ItemCreationListComponent_item$key;
}

export const ItemCreationList: FC<ItemCreationListProps> = ({ item }) => {
  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    ItemCreationListPaginationQuery,
    ItemCreationListComponent_item$key
  >(fragment, item);
  const onMore = () => {
    loadNext(10);
  };

  const edges = data.creates.edges;
  const items = edges?.filter(notEmpty);

  if (!items || items.length === 0) {
    return <Box pad="medium">This item does not create anything</Box>;
  }

  if (isLoadingNext) {
    return <>Loading...</>;
  }

  return (
    <>
      <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small">
        {items.map((i, index) => (
          <ItemCreationCard key={index} itemCombination={i.node} itemImageUrl={data.imageUrl} itemName={data.name} />
        ))}
      </Grid>
      {hasNext && (
        <Box direction="row" align="center" pad="medium" gap="medium">
          <Button primary onClick={onMore} label="load more" />
        </Box>
      )}
    </>
  );
};
