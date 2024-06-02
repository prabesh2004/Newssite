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
import Signup from './Login/Signup';
import Dynamic from './Dynamic pages/Dynamic';
import Footer from './Footer/Footer';
import LocalData from "./Json/Local.json"
import SportData from "./Json/Sports.json"
import WorldData from "./Json/World.json"


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
            <div className='news-title'>Sport page ! Comming soon.....</div>
         
        </div>,
      }, {
        path: "/article",
        element: <div className="section">
        <Navbar/>
        
        <div className='news-title'>Article page ! Comming soon.....</div>

    </div>,
      }, {
        path: "/weather",
        element: <div className="section">
        <Navbar/>
        <div className='news-title'>Weather ! Comming soon.....</div>

    </div>,
      },{
        path: "/signin",
        element:<div className="logpage">
          <Signin/>
      </div>,
      },
      {
        path: "/signup",
        element:<div className="logpage">
          <Signup/>
      </div>,
      },{
        path:"/news/Local/:id",
        element:<>
         <Navbar/>



       <div  className="section">
         
          <Dynamic Data={LocalData} newstype={"Local"}/>
          <Footer/>
          </div>
       </>,
      },{
        path:"/news/Sports/:id",
        element:<>
         <Navbar/>
       <div  className="section">
          <Dynamic Data={SportData} newstype= {"Sports"}/>
          <Footer/>
          </div>
       </>,
      },{
        path:"/news/World/:id",
        element:<>
         <Navbar/>
       <div  className="section">
          
          <Dynamic Data={WorldData} newstype={"World"}/>
          <Footer/>
          </div>
       </>,
      }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>
);

