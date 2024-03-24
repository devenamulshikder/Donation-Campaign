import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <h1>Home....</h1>,
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
