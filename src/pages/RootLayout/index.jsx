import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Colors from "../../styles/Colors";

//==========================Hooks==========================
import { useSharedMenu } from "../../hooks";
import { useSharedLogicState, useOnInit } from "./logic";

export default function RootLayout() {
  const { height, ref } = useSharedLogicState();
  const location = useLocation();
  const { menu, closeMenu } = useSharedMenu();
  useOnInit();

  //=======================================================
  function renderMenu() {
    return (
      menu && (
        <div
          style={{
            display: "flex",
            position: "fixed",
            width: "100%",
            zIndex: 1,
          }}
        >
          <div
            style={{
              marginTop: `${height}vh`,
              height: `${100 - height}vh`,
              width: "20%",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            <Menu />
          </div>
          <div
            style={{
              background: Colors.fadeBackground,
              width: "80%",
            }}
            onClick={closeMenu}
          />
        </div>
      )
    );
  }

  //=========================Return=========================
  return (
    <>
      <Header
        innerRef={ref}
        page={
          location.pathname === "/observatorioiftm/" ? "Home" : "Outra rota"
        }
      />
      {renderMenu()}
      <div style={{ marginTop: `${height}vh` }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
