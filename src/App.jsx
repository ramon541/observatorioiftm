import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useSharedWindowHeight } from "./hooks";

export default function App() {
  //=======================================================
  // Estado para observar o tamanho da janela
  const { setWindowHeight } = useSharedWindowHeight();
  window.addEventListener("resize", function () {
    setWindowHeight(this.window.innerHeight);
  });

  //=======================================================
  return <RouterProvider router={routes} />;
}
