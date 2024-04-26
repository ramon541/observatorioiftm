import React, { useCallback, useState } from "react";
import {
  Container,
  SecondTitle,
  Small,
  ThirdTitle,
  Title,
} from "../../styles/styled-components";
import Card from "../../components/Card";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { getCitiesAndData, getGraduacoes } from "../../db";
import { Chart } from "primereact/chart";

export default function FormacaoAcademica() {
  const { CityData } = getCitiesAndData();
  const { listGraduacoes } = getGraduacoes();
  const [campus, setCampus] = useState(CityData[0].cidade.nome);
  const [data, setData] = useState(CityData[0]);

  //=======================================================
  function onHandleChange(campus) {
    setCampus(campus);
    CityData.filter((data) => {
      data.cidade.nome === campus && setData(data);
    });
  }

  //=======================================================
  function renderSelectCampusCard() {
    return (
      <Card width={"40%"} name={"Pesquisar"}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Escolha o Campus:
          </InputLabel>
          <Select
            labelId="chooseCampusLabel"
            id="chooseCampus"
            label="escolha-o-campus"
            IconComponent={ExpandMore}
            defaultChecked="Todos os Campus"
            onChange={(value) => onHandleChange(value.target.value)}
            value={campus}
          >
            {CityData.map((city) => {
              return (
                <MenuItem key={city.cidade.id} value={city.cidade.nome}>
                  {city.cidade.nome}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Card>
    );
  }

  //=======================================================
  function renderTitle() {
    return (
      <div
        style={{
          marginBottom: "1rem",
        }}
      >
        <Title>Formação Acadêmica de Docentes por Campus</Title>
      </div>
    );
  }

  //=======================================================
  function renderIndicators() {
    return (
      <div style={{ marginTop: "3rem" }}>
        <SecondTitle>{campus}</SecondTitle>
        <ThirdTitle>Número de docentes: {data.totalDocentes}</ThirdTitle>
        <ThirdTitle>
          Número de docentes com Lattes: {data.docentesComLattes}
        </ThirdTitle>
      </div>
    );
  }

  //=======================================================
  function renderChart(data) {
    const stackedOptionsUpdated = {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      indexAxis: "y",
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: false,
        },
        y: {
          stacked: false,
        },
      },
    };

    const newArray = [];

    for (let i = 0; i < 10; i++) {
      newArray.push(data[Math.floor(Math.random() * data.length)]);
    }
    const newData = {
      labels: newArray.map((data) => data.graduacoes),
      datasets: [
        {
          type: "bar",
          label: "Graduações",
          data: newArray.map((data) => data.quantidade_docentes),
        },
      ],
    };
    return (
      <Chart
        style={{ width: "100%", minHeight: "25rem" }}
        type="bar"
        data={newData}
        options={stackedOptionsUpdated}
      />
    );
  }

  //=======================================================
  function renderDataCard() {
    return (
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <Card name="Graduações">{renderChart(listGraduacoes)}</Card>
      </div>
    );
  }

  //========================Return=========================
  return (
    <Container>
      {renderTitle()}
      {renderSelectCampusCard()}
      {renderIndicators()}
      {renderDataCard()}
    </Container>
  );
}
