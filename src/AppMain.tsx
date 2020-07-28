import { Box, Main } from 'grommet';
import React, { FC } from 'react';

import { ItemSearch } from './ItemSearch';

export const AppMain: FC = () => {
  return (
    <Box fill align="center" justify="start" pad="large">
      <Main pad="large">
        <ItemSearch />
      </Main>
    </Box>
  );
};
