import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../Home/Home';
import { Item } from '../Item/Item';
import { Layout } from '../Layout/Layout';

export const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:name" element={<Item />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
