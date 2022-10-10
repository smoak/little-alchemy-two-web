import graphql from 'babel-plugin-relay/macro';
import { Box, Grid, Tab, Tabs } from 'grommet';
import { FC } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { ItemCombinationList } from '../ItemCombinationList/ItemCombinationList';
import { ItemCreationList } from '../ItemCreationList/ItemCreationList';

import { useItemParams } from '../Router/hooks';

import { ItemQuery } from './__generated__/ItemQuery.graphql';

const query = graphql`
  query ItemQuery($name: String!) {
    item(name: $name) {
      name
      myths
      id
      imageUrl
      ...ItemCombinationListComponent_item
      ...ItemCreationListComponent_item
    }
  }
`;

interface ItemProps {
  readonly itemName?: string;
}

export const Item: FC<ItemProps> = ({ itemName }) => {
  const { name } = useItemParams();
  const { item } = useLazyLoadQuery<ItemQuery>(query, { name: itemName ?? name });

  if (!item) {
    return <>No item found</>;
  }

  return (
    <Tabs>
      <Tab title="Combinations">
        <Box pad="small">
          <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small">
            <ItemCombinationList item={item} />
          </Grid>
        </Box>
      </Tab>
      <Tab title="Pair with">
        <Box pad="small">
          <Grid rows="small" columns={{ count: 'fit', size: 'medium' }} gap="small">
            <ItemCreationList item={item} itemName={name} itemImageUrl={item.imageUrl} />
          </Grid>
        </Box>
      </Tab>
    </Tabs>
  );
};
