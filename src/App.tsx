import { Grommet } from 'grommet';
import React, { FC } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import environment from './relay';
import { theme } from './theme';

const App: FC = () => (
  <Grommet theme={theme} full>
    <RelayEnvironmentProvider environment={environment}>
      <AppHeader />
      <AppMain />
    </RelayEnvironmentProvider>
  </Grommet>
);

export default App;
