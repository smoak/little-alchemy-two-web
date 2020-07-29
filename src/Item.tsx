import graphql from 'babel-plugin-relay/macro';
import { Box, Heading } from 'grommet';
import React, { FC } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';

import { ItemCombinationList } from './ItemCombinationList';
import { ItemQuery } from './__generated__/ItemQuery.graphql';

const query = graphql`
  query ItemQuery($name: String!) {
    item(name: $name) {
      name
      myths
      id
      ...ItemCombinationListComponent_item
    }
  }
`;

export const Item: FC = () => {
  const { name } = useParams();
  const { item } = useLazyLoadQuery<ItemQuery>(query, { name });

  if (!item) {
    return <>No item found</>;
  }

  return (
    <Box align="stretch">
      <Box background="brand" align="center">
        <Heading level="3">{item.name}</Heading>
      </Box>
      <Box background="light-2" align="center">
        <Heading level="4">Combinations</Heading>
        <ItemCombinationList item={item} />
      </Box>
    </Box>
  );
};
