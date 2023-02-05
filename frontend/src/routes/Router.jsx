import {
    createBrowserRouter
  } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Hotels from "../pages/Hotels";
import SingleHotel from "../pages/SingleHotel";


export  const Router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Home />
      ),
    },
    {
      path: "about",
      element: (
       <About />
      ),
    },
    {
      path: "contact",
      element: (
       <Contact />
      ),
    },
    {
        path:"hotels",
        element:(
            <Hotels/>
        )
    },
    {
        path:"hotels/:id",
        element:(
            <SingleHotel/>
        )
    }
  ]);
  