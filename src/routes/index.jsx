//= ------------- External libraries import -------------
import { createBrowserRouter } from "react-router-dom";

//= ------------- Pages components import -------------
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
