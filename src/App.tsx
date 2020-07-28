import { Grommet } from 'grommet';
import React, { FC, Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import environment from './relay';
import { theme } from './theme';

const App: FC = () => (
  <Grommet theme={theme} full>
    <RelayEnvironmentProvider environment={environment}>
      <AppHeader />
      <Suspense fallback={'Loading...'}>
        <AppMain />
      </Suspense>
    </RelayEnvironmentProvider>
  </Grommet>
);

export default App;
