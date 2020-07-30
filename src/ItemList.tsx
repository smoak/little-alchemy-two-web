import { Box, Button, List } from 'grommet';
import React, { FC, useCallback } from 'react';

import { ItemCombination } from './ItemCombination';

export interface Item {
  readonly source: string;
  readonly target: string;
}

type LoadNext = (count: number) => void;

interface ItemListProps {
  readonly items: Item[];
  readonly loadNext: LoadNext;
  readonly hasNext: boolean;
}

export const ItemList: FC<ItemListProps> = ({ hasNext, items, loadNext }) => {
  const onLoadNextClicked = useCallback(() => {
    loadNext(3);
  }, [loadNext]);
  const loadNextButton = hasNext ? <Button secondary label="Load More" onClick={onLoadNextClicked} /> : null;

  return (
    <Box pad="small">
      <List data={items}>{(item: Item, index: number) => <ItemCombination index={index} item={item} />}</List>
      <Box gap="xxsmall" pad="xxsmall">
        {loadNextButton}
      </Box>
    </Box>
  );
};
