import { Box, Main } from 'grommet';
import React, { FC } from 'react';

import { Routes } from './Routes';

export const AppMain: FC = () => {
  return (
    <Box fill align="center" justify="start" pad="large">
      <Main pad="large">
        <Routes />
      </Main>
    </Box>
  );
};
