import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/comman/layout/Layout";
import Login from "./components/pages/Login";
import Home from "./components/pages/home/Home";
import Devices from "./components/pages/devices/Devices";

console.log(import.meta.env.VITE_BACKEND_URL)

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/devices",
          element: <Devices />,
        },
      ],
    },
    {
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
