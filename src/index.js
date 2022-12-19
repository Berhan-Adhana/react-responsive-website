import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Plans from "./pages/plans/Plans";
import Gallery from "./pages/gallery/Gallery";
import Trainers from "./pages/traniers/Trainers";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ScrollTop from "./common/ScrollTop";
function Pages() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTop />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "plans", element: <Plans /> },
      { path: "gallery", element: <Gallery /> },
      { path: "trainers", element: <Trainers /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
