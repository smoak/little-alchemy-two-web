import { Anchor } from 'grommet';
import React, { FC, ReactNode } from 'react';

interface ItemLinkProps {
  readonly itemName: string;
  readonly children?: ReactNode;
}

export const ItemLink: FC<ItemLinkProps> = ({ itemName, children }) => (
  <>
    <Anchor href={`/item/${itemName}`}>{children}</Anchor>
  </>
);
