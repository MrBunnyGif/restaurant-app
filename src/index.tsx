import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Views/Login';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Auth from './Auth';
import PrivateRoutes from './PrivateRoutes';
import routes from './Routes'
import PublicRoutes from './PublicRoutes';
import { store } from './store'
import { Provider } from 'react-redux'

Auth.verifyIfSectionOn()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path='/' element={<Login />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            {routes.map(route => <Route {...route} />)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
