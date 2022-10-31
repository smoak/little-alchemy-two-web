import graphql from 'babel-plugin-relay/macro';
import { Box, Tab, Tabs } from 'grommet';
import { FC } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { ItemCombinationList } from '../ItemCombinationList/ItemCombinationList';
import { ItemCreationList } from '../ItemCreationList/ItemCreationList';

import { useItemParams } from '../Router/hooks';

import { ItemQuery } from './__generated__/ItemQuery.graphql';

const query = graphql`
  query ItemQuery($name: String!, $count: Int, $cursor: String) {
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
  const { item } = useLazyLoadQuery<ItemQuery>(query, { name: itemName ?? name, count: 6 });

  if (!item) {
    return <>No item found</>;
  }

  return (
    <Tabs>
      <Tab title="Combinations">
        <Box pad="small">
          <ItemCombinationList item={item} />
        </Box>
      </Tab>
      <Tab title="Pair with">
        <Box pad="small">
          <ItemCreationList item={item} />
        </Box>
      </Tab>
    </Tabs>
  );
};
