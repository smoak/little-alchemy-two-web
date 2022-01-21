import { Box } from 'grommet';
import React, { FC } from 'react';

import { ItemSearch } from '../ItemSearch/ItemSearch';

export const Home: FC = () => (
  <Box fill align="center" pad={{ top: 'large' }}>
    <ItemSearch />
  </Box>
);
