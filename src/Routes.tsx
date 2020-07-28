import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Item } from './Item';

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/item/:name" component={Item} />
      </Switch>
    </BrowserRouter>
  );
};
