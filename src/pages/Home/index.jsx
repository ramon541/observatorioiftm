import { memo } from "react";
import { Container, CentralContainer } from "../../styles/styled-components";
import Card from "../../components/Card";

export default memo(function Home() {
  const CardsContainer = {
    margin: "2rem 0 1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "2rem",
    width: "85%",
  };
  return (
    <Container>
      <h1 style={{ fontWeight: 600 }}>Bem vindo ao Observatório IFTM</h1>
      <CentralContainer>
        <div style={CardsContainer}>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Card />
            <Card />
          </div>
          <Card />
          <Card />
        </div>
      </CentralContainer>
    </Container>
  );
});
