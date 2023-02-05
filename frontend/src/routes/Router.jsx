import {
    createBrowserRouter
  } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../pages/home/Home";
import Hotels from "../pages/hotels/Hotels";
import SingleHotel from "../pages/single-hotel/SingleHotel";


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
  