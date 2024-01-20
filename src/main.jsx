import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import About from './routes/About.jsx';
import Home from './routes/Home.jsx';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App/>,
    children: [
      {
        path: '/portfolio',
        element: <App/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
