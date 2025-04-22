import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/pages/Home';
import Resume from './component/pages/Resume';
import Project from './component/pages/Project';
import About from './component/pages/About';

const router=createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'resume',
        element:<Resume/>
      },
      {
        path:'project',
        element:<Project/>
      },
      {
        path:'about',
        element:<About/>
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);