import { Box, InfiniteScroll, InfiniteScrollProps } from 'grommet';
import React, { FC } from 'react';

export interface Item {
  readonly source: string;
  readonly target: string;
}

type LoadNext = (count: number) => void;

interface ItemComponentProps {
  readonly item: Item;
  readonly index: number;
}

interface ItemListProps {
  readonly items: Item[];
  readonly onMore?: InfiniteScrollProps['onMore'];
  render: (props: ItemComponentProps) => React.ReactNode;
}

export const ItemList: FC<ItemListProps> = ({ items, onMore, render }) => (
  <Box pad="small">
    <InfiniteScroll items={items} onMore={onMore} step={10} show={2}>
      {(item: Item, index: number) => (
        <Box key={index} pad="small" border={{ side: 'bottom' }} align="center">
          {render({ item, index })}
        </Box>
      )}
    </InfiniteScroll>
  </Box>
);
