import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "./styles/fonts/fonts.css";

export default function App() {
  return <RouterProvider router={routes} />;
}
