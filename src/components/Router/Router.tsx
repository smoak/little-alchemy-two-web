import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageHome } from '../PageHome/PageHome';
import { PageItem } from '../PageItem/PageItem';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/item/:name" element={<PageItem />} />
    </Routes>
  </BrowserRouter>
);
