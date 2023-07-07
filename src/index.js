import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar/Navbar';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/world",
        element: <div>Hello world</div>,
      },
      {
        path: "/local",
        element: <div className="section">
            <Navbar/>
        </div>,
      }, {
        path: "/sport",
        element: <div>Hello world</div>,
      }, {
        path: "/article",
        element: <div>Hello world</div>,
      }, {
        path: "/weather",
        element: <div>Hello world</div>,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

