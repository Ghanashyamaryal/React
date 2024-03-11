import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Github from './Component/Github'
import User from "./Component/user"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='/github' element = {<Github />}/>
    </Route>
  )
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

