import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App/App';
import * as serviceWorker from './serviceWorker';

// necessary because getElementById returns HTMLElement | null
// but createRoot does not accept null as a valid value so TS complains
const root = document.getElementById('root') || document.createElement('div');

ReactDOM.unstable_createRoot(root).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
