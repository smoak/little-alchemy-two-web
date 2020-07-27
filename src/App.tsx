import { Box, Grommet, Main } from 'grommet';
import React, { FC } from 'react';

import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import { theme } from './theme';

const App: FC = () => (
  <Grommet theme={theme} full>
    <Box fill>
      <AppHeader />
      <AppMain />
      <Main pad="large">Main content</Main>
    </Box>
  </Grommet>
);

export default App;
