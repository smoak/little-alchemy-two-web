import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../Home/Home';
import { Item } from '../Item/Item';
import { Layout } from '../Layout/Layout';

export const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/item/:name" component={Item} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
