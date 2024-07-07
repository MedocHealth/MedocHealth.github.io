import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter}from 'react-router-dom';
import HomePage from './pages/homepage';
import { ParallaxProvider } from 'react-scroll-parallax';
import FAQ from './pages/FAQ'
import Refundpolicy from './pages/Refundpolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Termsofuse from './pages/Termsofuse'
import BBlog from './pages/BBlog';
const router=createBrowserRouter(
  [
  {
path:'/',
element:<HomePage></HomePage>

},{
  path:'/faq',
element:<FAQ></FAQ>
},
{
  path:'/refundpolicy',
element:<Refundpolicy></Refundpolicy>
},
{
  path:'/privacypolicy',
element:<PrivacyPolicy></PrivacyPolicy>
},
{
  path:'/termsofuse',
element:<Termsofuse></Termsofuse>
},
{
  path:'/blog',
  element:<BBlog></BBlog>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ParallaxProvider>

<RouterProvider router={router}></RouterProvider>
  </ParallaxProvider>
);
