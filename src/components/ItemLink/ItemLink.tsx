import { Anchor } from 'grommet';
import React, { FC } from 'react';

interface ItemLinkProps {
  readonly itemName: string;
}

export const ItemLink: FC<ItemLinkProps> = ({ itemName, children }) => (
  <>
    <Anchor href={`/item/${itemName}`}>{children}</Anchor>
  </>
);
