import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <h1>Donation....</h1>,
      },
      {
        path: "/statistics",
        element: <h1>Statistics....</h1>,
      },
    ],
  },
]);

export default router;
