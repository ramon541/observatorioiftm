/* eslint-disable react/prop-types */
import styles from "./index.module.css";
import Colors from "../../styles/Colors";

import { ButtonIcon as Button } from "../../styles/styled-components";

export default function ButtonIcon({ label, onClick, icon }) {
  return (
    <Button
      onClick={onClick}
      className={styles.iconWrapper}
      style={{ padding: icon && label ? "0.5rem 1rem 0.5rem 1rem" : "0.5rem" }}
    >
      {icon && (
        <div
          className={"fa-solid " + icon}
          style={{
            color: Colors.textBlue,
            marginRight: label ? "0.5rem" : null,
          }}
        />
      )}
      {label && (
        <p style={{ color: Colors.textBlue, fontWeight: "bold" }}>{label}</p>
      )}
    </Button>
  );
}
