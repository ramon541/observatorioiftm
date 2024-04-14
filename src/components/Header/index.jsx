import styles from "./index.module.css";

import ButtonIcon from "../ButtonIcon";
import ObservatorioIFTMLogo from "../ObservatorioIFTMLogo";
import Colors from "../../styles/Colors";

import { useSharedMenu } from "../../hooks";

export default function Header({ page, innerRef }) {
  const { menu, openMenu, closeMenu } = useSharedMenu();

  function renderTopElements() {
    return (
      <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeaderLeft}>
          <ObservatorioIFTMLogo black />
        </div>
        <div className={styles.topHeaderRight}>
          <ButtonIcon icon="fa-user" label="Entrar" />
        </div>
      </div>
    );
  }

  //=======================================================
  function renderBottomElements() {
    return (
      <div className={styles.bottomElementsWrapper}>
        <div>
          <ButtonIcon
            icon={menu ? "fa-xmark" : "fa-bars"}
            onClick={menu ? closeMenu : openMenu}
          />
        </div>
        <h2 style={{ fontWeight: "normal", color: Colors.textBlue }}>{page}</h2>
      </div>
    );
  }
  //========================Return=========================
  return (
    <header ref={innerRef} className={styles.headerWrapper}>
      {renderTopElements()}
      {renderBottomElements()}
    </header>
  );
}
