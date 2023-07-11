import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./Navbar/Navbar"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Signin from './Login/Signin';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/world",
        element: <div className="section">
          <Navbar/>
            <div className='news-title'>World page! Comming soon.....</div>
        </div>,
      },
      {
        path: "/local",
        element: <div className="section">
            <Navbar/>
            <div className='news-title'>local page! Comming soon.....</div>

        </div>,
      }, {
        path: "/sport",
        element: <div className="section">
            <Navbar/>
            <div className='news-title'>sport page! Comming soon.....</div>

        </div>,
      }, {
        path: "/article",
        element: <div className="section">
        <Navbar/>
        <div className='news-title'>article page! Comming soon.....</div>

    </div>,
      }, {
        path: "/weather",
        element: <div className="section">
        <Navbar/>
        <div className='news-title'>weather page! Comming soon.....</div>

    </div>,
      },{
        path: "/signin",
        element:<div className="logpage">
          <Signin/>
      </div>,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

