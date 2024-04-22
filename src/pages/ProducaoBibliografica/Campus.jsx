import React from "react";
import { Small, Title } from "../../styles/styled-components";

// import styles from './index.module.css';

export default function Campus() {
  return (
    <div style={{ width: "100%" }}>
      <Title>Indicadores por Campus</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "0.5rem",
          width: "40%",
        }}
      >
        <Small>
          Dados extraídos da Plataforma Lattes em <strong>28/12/2023</strong>
        </Small>
        <Small color="red">
          Os estratos do Qualis Periódicos são do Quadriênio 2017-2020
        </Small>
      </div>
    </div>
  );
}
