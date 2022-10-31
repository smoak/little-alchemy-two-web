import { Box } from 'grommet';
import React, { FC, Suspense } from 'react';

import { ItemSearch } from '../ItemSearch/ItemSearch';

export const Home: FC = () => (
  <Box fill align="center" pad={{ top: 'large' }}>
    <Suspense fallback="Loading...">
      <ItemSearch />
    </Suspense>
  </Box>
);
