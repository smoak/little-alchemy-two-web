import { Box, Main } from 'grommet';
import React, { FC, Suspense } from 'react';

import { Routes } from './Routes';

export const AppMain: FC = () => {
  return (
    <Box fill align="center" justify="start" pad="large">
      <Main fill alignContent="stretch" pad="large">
        <Suspense fallback={'Loading...'}>
          <Routes />
        </Suspense>
      </Main>
    </Box>
  );
};
