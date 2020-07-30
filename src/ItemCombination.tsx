import { Anchor, Box, Text } from 'grommet';
import React, { FC } from 'react';

import { Item } from './ItemList';

interface ItemCombinationProps {
  readonly item: Item;
  readonly index: number;
  readonly state?: {
    readonly active: boolean;
  };
}
export const ItemCombination: FC<ItemCombinationProps> = ({ item }) => {
  const sourceHref = `/item/${item.source}`;
  const targetHref = `/item/${item.target}`;

  return (
    <Box direction="row">
      <Anchor href={sourceHref}>
        <Text key="p" weight="bold" margin="small">
          {item.source}
        </Text>
      </Anchor>
      <Text>+</Text>
      <Anchor href={targetHref}>
        <Text key="s" margin="small">
          {item.target}
        </Text>
      </Anchor>
    </Box>
  );
};
