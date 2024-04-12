import styles from "./index.module.css";

import ButtonIcon from "../ButtonIcon";

import ObservatorioIFTMLogo from "../ObservatorioIFTMLogo";

export default function Header({ page }) {
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
          <ButtonIcon icon="fa-bars" />
        </div>
        <h1 style={{ fontWeight: "normal" }}>{page}</h1>
      </div>
    );
  }
  //========================Return=========================
  return (
    <header className={styles.headerWrapper}>
      {renderTopElements()}
      {renderBottomElements()}
    </header>
  );
}
