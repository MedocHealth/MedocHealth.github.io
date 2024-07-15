import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage';
import { ParallaxProvider } from 'react-scroll-parallax';
import FAQ from './pages/FAQ'
import Refundpolicy from './pages/Refundpolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Termsofuse from './pages/Termsofuse'

const router = createBrowserRouter([{
  path: '/',
  element: < HomePage />
},
{
  path: '/faq',
  element: < FAQ />
},
{
  path: '/refundpolicy',
  element: < Refundpolicy />
},
{
  path: '/privacypolicy',
  element: < PrivacyPolicy />
},
{
  path: '/termsofuse',
  element: < Termsofuse />
}

// {
//   path: '/blog',
//   element: < BBlog />
// }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <RouterProvider router={router}></RouterProvider>
  </ParallaxProvider>
);