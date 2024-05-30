import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter}from 'react-router-dom';
import HomePage from './pages/homepage';
import { ParallaxProvider } from 'react-scroll-parallax';

const router=createBrowserRouter(
  [
  {
path:'/',
element:<HomePage></HomePage>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>

<RouterProvider router={router}></RouterProvider>
  </ParallaxProvider>
);
