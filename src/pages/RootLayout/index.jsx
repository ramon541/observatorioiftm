import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Header page={location.pathname === "/" ? "Home" : "Outra rota"} />
      {console.log(typeof location.pathname)}
      <Outlet />
      <Footer />
    </>
  );
}
