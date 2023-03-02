import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './language/i18next';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
import { store } from './redux/store';
import { Provider } from 'react-redux';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);