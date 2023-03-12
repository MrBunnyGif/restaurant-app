import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Views/Login';
import reportWebVitals from './reportWebVitals';
import ItemsMenu from './Views/ItemsMenu';
import Bascket from './Views/Bascket';
import SectionInfo from './Views/SectionInfo';
import ItemInfo from './Views/ItemInfo';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from './Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/menu',
    element: <ItemsMenu />,
  },
  {
    path: '/bascket',
    element: <Bascket />,
  },
  {
    path: '/section',
    element: <SectionInfo />,
  },
  {
    path: '/item',
    element: <ItemInfo />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

Auth.verifyIfSectionOn()

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
