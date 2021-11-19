import { Grommet } from 'grommet';
import React, { FC } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import { Router } from '../Router/Router';

import environment from './relay';
import { theme } from './theme';

export const App: FC = () => (
  <Grommet theme={theme} full>
    <RelayEnvironmentProvider environment={environment}>
      <Router />
    </RelayEnvironmentProvider>
  </Grommet>
);
