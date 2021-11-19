import { Box, Text } from 'grommet';
import React, { FC } from 'react';

import { ItemLink } from '../ItemLink/ItemLink';
import { Item } from '../ItemList/ItemList';

interface ItemCombinationProps {
  readonly item: Item;
  readonly index: number;
  readonly state?: {
    readonly active: boolean;
  };
}
export const ItemCombination: FC<ItemCombinationProps> = ({ item }) => (
  <Box direction="row">
    <ItemLink itemName={item.source}>
      <Text key="p" weight="bold" margin="small">
        {item.source}
      </Text>
    </ItemLink>
    <Text>+</Text>
    <ItemLink itemName={item.target}>
      <Text key="s" margin="small">
        {item.target}
      </Text>
    </ItemLink>
  </Box>
);
