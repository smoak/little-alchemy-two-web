import graphql from 'babel-plugin-relay/macro';
import { Box, Grid, Text } from 'grommet';
import React, { FC } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';

import { ItemCombinationList } from '../ItemCombinationList/ItemCombinationList';
import { ItemCreationList } from '../ItemCreationList/ItemCreationList';
import { useItemParams } from '../Router/hooks';

import { MythsIcon } from './MythsIcon';
import { ItemQuery } from './__generated__/ItemQuery.graphql';

const query = graphql`
  query ItemQuery($name: String!) {
    item(name: $name) {
      name
      myths
      id
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

  const mythsIcon = item.myths ? <MythsIcon /> : null;

  return (
    <Box pad="xsmall" fill>
      <Box align="center" justify="center" background="neutral-3" pad={{ horizontal: 'medium', vertical: 'small' }}>
        <Text size="large">{item.name}</Text>
        {mythsIcon}
      </Box>
      <Grid fill gap="small" columns={{ count: 2, size: 'auto' }}>
        <Box background="light-2">
          <Box
            background="light-3"
            align="center"
            justify="center"
            pad={{ horizontal: 'small', vertical: 'small' }}
            border={{ side: 'bottom' }}
          >
            <Text size="large">Create {item.name} by combining</Text>
          </Box>
          <ItemCombinationList item={item} />
        </Box>
        <Box background="light-2">
          <Box
            align="center"
            justify="center"
            pad={{ horizontal: 'small', vertical: 'small' }}
            border={{ side: 'bottom' }}
          >
            <Text size="large">Combine {item.name} with</Text>
          </Box>
          <ItemCreationList item={item} />
        </Box>
      </Grid>
    </Box>
  );
};
