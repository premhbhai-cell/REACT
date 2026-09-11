

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";


function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;