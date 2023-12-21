import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.js'
import SignUp from './pages/SignUp.js'
import Index from './pages/Index.js'
import Contact from './pages/Contact.js'
import About from './pages/About.js'
import SignIn from './pages/SignIn.js'
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
    path:"SignIn",
    element: <SignIn/>
  },
  {
    path:"SignUp",
    element: <SignUp/>
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path:"Contact",
    element: <Contact/>
  },
  {
    path:"Index",
    element: <Index/>
  }
]);
ReactDOM.render(<RouterProvider router={router}/>, document.getElementById('root'))