import Colors from "../../styles/Colors";
import { TextHover } from "../../styles/styled-components";
import styles from "./styles.module.css";
import AcessoAInformacao from "../../assets/icons/AcessoAInformacao";
import ObservatorioIFTMLogo from "../ObservatorioIFTMLogo";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer
        style={{
          backgroundColor: Colors.backgroundBlue,
        }}
        className={styles.footerWrapper}
      >
        <div className={styles.footerBottom}>
          <ObservatorioIFTMLogo />
          <AcessoAInformacao
            cursor
            link={"https://www.gov.br/acessoainformacao/pt-br"}
          />
        </div>
      </footer>
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
    </div>
  );
}
