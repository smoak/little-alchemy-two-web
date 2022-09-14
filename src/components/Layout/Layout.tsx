import { Main } from 'grommet';
import React, { FC, ReactNode, Suspense } from 'react';

import { AppHeader } from '../AppHeader/AppHeader';

type LayoutProps = {
  readonly children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <AppHeader />
    <Main fill alignContent="stretch">
      <Suspense fallback={'Loading...'}>{children}</Suspense>
    </Main>
  </>
);
