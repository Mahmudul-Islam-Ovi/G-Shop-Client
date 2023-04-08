import React from 'react';
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from '../Layout/Main';
import HomePage from '../pages/Home/HomePage';
import About from '../pages/About/About';
import BookingPage from '../pages/BookingPage/BookingPage';
import Product from '../pages/Product/Product';
import Contact from '../pages/Contact/Contact.jsx';
import SingIn from '../pages/Login/SingIn';
import SingUp from '../pages/Login/SingUp';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "booking",
          element: <BookingPage></BookingPage>,
        },
        {
          path: "product",
          element: <Product></Product>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
       
        {
          path: "login",
          element: <SingIn></SingIn>,
        },
        {
          path: "singUp",
          element: <SingUp></SingUp>,
        },
       
      ]
    },
  
  ])