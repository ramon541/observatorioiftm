import React, { useState } from "react";
import { Container, Hr } from "../../styles/styled-components";
import Card from "../../components/Card";
import Campus from "./Campus";
import Periodo from "./Periodo";
import Docente from "./Docente";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function ProducaoBibliografica() {
  const [opcao, setOpcao] = useState("campus");
  return (
    <Container>
      <div
        style={{
          width: "100%",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card name={"Selecione o tipo de consulta:"} width={"75%"}>
          <FormControl>
            <RadioGroup
              row
              defaultValue="campus"
              onChange={(option) => setOpcao(option.target.value)}
            >
              <FormControlLabel
                value="campus"
                control={<Radio />}
                label="Campus"
              />
              <FormControlLabel
                value="periodo"
                control={<Radio />}
                label="Período"
              />
              <FormControlLabel
                value="docente"
                control={<Radio />}
                label="Docente"
              />
            </RadioGroup>
          </FormControl>
        </Card>
      </div>
      <Hr />
      <div style={{ width: "100%" }}>
        {opcao === "campus" && <Campus />}
        {opcao === "periodo" && <Periodo />}
        {opcao === "docente" && <Docente />}
      </div>
    </Container>
  );
}
