import { Grommet } from 'grommet';
import React, { FC, Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import 'react-loading-skeleton/dist/skeleton.css';

import { Router } from '../Router/Router';

import environment from './relay';
import { theme } from './theme';

export const App: FC = () => (
  <Grommet theme={theme} full>
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </RelayEnvironmentProvider>
  </Grommet>
);
