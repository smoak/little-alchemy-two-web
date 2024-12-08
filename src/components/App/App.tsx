import { Grommet } from 'grommet';
import { Suspense } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';

import { Router } from '../Router/Router';

import { theme } from './theme';

export const App = () => (
  <Grommet theme={theme} full="min">
    <Suspense fallback="Loading...">
      <Router />
    </Suspense>
  </Grommet>
);
