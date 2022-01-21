import graphql from 'babel-plugin-relay/macro';
import { Box, Grid, Heading } from 'grommet';
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

export const Item: FC = () => {
  const { name } = useItemParams();
  const { item } = useLazyLoadQuery<ItemQuery>(query, { name });

  if (!item) {
    return <>No item found</>;
  }

  const mythsIcon = item.myths ? <MythsIcon /> : null;

  return (
    <Box align="stretch">
      <Box background="brand" align="center">
        <Heading level="3">{item.name}</Heading>
        {mythsIcon}
      </Box>
      <Grid columns={{ count: 2, size: 'auto' }} gap="small">
        <Box background="light-2" align="center">
          <Heading level="4">Create {item.name} By Combining</Heading>
          <ItemCombinationList item={item} />
        </Box>
        <Box background="light-2" align="center">
          <Heading level="4">Combine {item.name} With</Heading>
          <ItemCreationList item={item} />
        </Box>
      </Grid>
    </Box>
  );
};
