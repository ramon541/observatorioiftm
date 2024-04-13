import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

import { useSharedMenu } from "../../hooks";

export default function RootLayout() {
  const { menu } = useSharedMenu();
  const location = useLocation();
  return (
    <>
      <Header
        page={location.pathname === "/observatorioiftm" ? "Home" : "Outra rota"}
      />
      <div style={{ display: "flex", width: "100%" }}>
        {menu && <Menu />}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
