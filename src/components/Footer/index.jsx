import Colors from "../../styles/Colors";
import { TextHover } from "../../styles/styled-components";
import styles from "./index.module.css";
import AcessoAInformacao from "../../assets/icons/AcessoAInformacao";
import ObservatorioIFTMLogo from "../ObservatorioIFTMLogo";

export default function Footer() {
  function renderFooter() {
    return (
      <footer
        style={{
          backgroundColor: Colors.backgroundBlue,
        }}
        className={styles.footerWrapper}
      >
        <ObservatorioIFTMLogo />
        <AcessoAInformacao
          cursor
          link={"https://www.gov.br/acessoainformacao/pt-br"}
        />
      </footer>
    );
  }

  //=======================================================
  function renderCopyright() {
    return (
      <span
        className={styles.copyrightBackground}
        style={{ backgroundColor: Colors.backgroundDarkBlue }}
      >
        <p style={{ color: Colors.white }} className={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          <TextHover>
            {" "}
            Ea placeat magnam quisquam perspiciatis quaerat reiciendis{" "}
          </TextHover>
        </p>
      </span>
    );
  }

  //========================Return=========================
  return (
    <div className={styles.wrapper}>
      {renderFooter()}
      {renderCopyright()}
    </div>
  );
}
