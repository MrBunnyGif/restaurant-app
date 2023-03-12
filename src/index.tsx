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
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Auth from './Auth';

Auth.verifyIfSectionOn()

const router = createBrowserRouter([
  {
    path: '/',
    element: Auth.isSectionOn ? <Navigate to="/menu" replace={true} /> : <Login />,
  },
  {
    path: '/menu',
    element: !Auth.isSectionOn ? <Navigate to="/" replace={true} /> : <ItemsMenu />,
  },
  {
    path: '/bascket',
    element: !Auth.isSectionOn ? <Navigate to="/" replace={true} /> : <Bascket />,
  },
  {
    path: '/section',
    element: !Auth.isSectionOn ? <Navigate to="/" replace={true} /> : <SectionInfo />,
  },
  {
    path: '/item',
    element: !Auth.isSectionOn ? <Navigate to="/" replace={true} /> : <ItemInfo />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
