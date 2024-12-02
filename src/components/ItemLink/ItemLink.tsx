import { Anchor } from 'grommet';
import { ReactNode } from 'react';

interface ItemLinkProps {
  readonly itemName: string;
  readonly children?: ReactNode;
}

export const ItemLink = ({ itemName, children }: ItemLinkProps) => (
  <Anchor href={`/item/${itemName}`}>{children}</Anchor>
);
