import React, { useState } from "react";
import { Container } from "../../styles/styled-components";
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
      <div style={{ width: "50%", marginBottom: "2rem" }}>
        <Card name={"Selecione o tipo de consulta:"} justifyLeft>
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
      {opcao === "campus" && <Campus />}
      {opcao === "periodo" && <Periodo />}
      {opcao === "docente" && <Docente />}
    </Container>
  );
}
