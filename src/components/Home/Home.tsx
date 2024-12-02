import { Box } from 'grommet';
import { Suspense } from 'react';

import { ItemSearch } from '../ItemSearch/ItemSearch';

export const Home = () => (
  <Box fill align="center" pad={{ top: 'large' }}>
    <Suspense fallback="Loading...">
      <ItemSearch />
    </Suspense>
  </Box>
);
