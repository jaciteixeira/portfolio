import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './App.jsx';
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Education from './routes/Education.jsx'
import Error from './routes//NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {path: '/', element: <AppRoutes/>,
    errorElement: <Error/>,
    children:[
      { path: '/', element: <Home/> },
      { path: '/about', element: <About/> },
      { path: '/education', element: <Education/> },
      ]
    }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
)
