import React from "react";
import { CustomLink, Small, Title } from "../../styles/styled-components";
import Card from "../../components/Card";

// import styles from './index.module.css';

export default function Docente() {
  //=======================================================
  function renderTitle() {
    return (
      <>
        <Title>Primeiro acesso</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.5rem",
            marginBottom: "1rem",
            width: "40%",
          }}
        >
          <p>Somente docentes do IFTM possuem conta de usuário neste site.</p>
        </div>
      </>
    );
  }

  //=======================================================
  function renderCard() {
    return (
      <>
        <Card name={"Docente"} width="100%" justifyLeft={true}>
          <p>
            Caro <strong>docente</strong>, o seu email de acesso ao sistema é o
            email institucional.
          </p>
          <p>
            Para conferir o seu email de acesso, basta acessar{" "}
            <CustomLink to="/observatorioiftm/consultanome">
              Docentes » Consulta por Nome
            </CustomLink>
            .
          </p>
          <p>O acesso ao sistema é feito pelo Google.</p>
          <p>
            Para acessar o sistema,{" "}
            <CustomLink to="/observatorioiftm/login">clique aqui</CustomLink>.
          </p>
        </Card>
      </>
    );
  }

  //========================Return=========================
  return (
    <>
      {/* {renderModals()} */}
      {renderTitle()}
      {renderCard()}
      {/* {renderSelectYearsCard()} */}
      {/* {renderIndicators()} */}
      {/* {renderDataCards()} */}
    </>
  );
}
