import { Main } from 'grommet';
import React, { FC, Suspense } from 'react';

import { AppHeader } from '../AppHeader/AppHeader';

export const Layout: FC = ({ children }) => (
  <>
    <AppHeader />
    <Main fill alignContent="stretch">
      <Suspense fallback={'Loading...'}>{children}</Suspense>
    </Main>
  </>
);
