import { Grommet } from 'grommet';
import React, { FC } from 'react';

import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import { theme } from './theme';

const App: FC = () => (
  <Grommet theme={theme} full>
    <AppHeader />
    <AppMain />
  </Grommet>
);

export default App;
