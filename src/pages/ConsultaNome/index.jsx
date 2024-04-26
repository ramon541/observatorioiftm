import React, { useState } from "react";
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
import { Chart } from "primereact/chart";
import { getLattes, getCitiesAndData } from "../../db";

// import styles from './index.module.css';

export default function ConsultaNome() {
  const { lattes } = getLattes();
  const { CityData } = getCitiesAndData();

  const [campus, setCampus] = useState(CityData[0].cidade.nome);
  const [data, setData] = useState(CityData[0]);
  //=======================================================
  function renderTitle() {
    return (
      <>
        <Title>Indicadores de Inovação</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.5rem",
            marginBottom: "1rem",
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
      </>
    );
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
  function renderIndicators() {
    return (
      <div style={{ marginTop: "3rem" }}>
        <SecondTitle>Indicadores - {campus}</SecondTitle>
        <ThirdTitle>Número de docentes: {data.totalDocentes}</ThirdTitle>
        <ThirdTitle>
          Número de docentes com Lattes: {data.docentesComLattes}
        </ThirdTitle>
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <ThirdTitle>Observação: </ThirdTitle>
          <Small>
            Os dados da estatística são relacionados ao docentes permanentes da
            Instituição. Com isso, alguns dados podem estar vinculados ao
            docente e não à Instituição.
          </Small>
        </div>
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
      maintainAspectRatio: false,
      scales: {
        x: {
          // stacked: true,
        },
        y: {
          // stacked: true,
        },
      },
    };

    const newArray = [];

    for (let i = 0; i < 10; i++) {
      newArray.push(data[Math.floor(Math.random() * data.length)]);
    }

    console.log(Object.values(newArray[0]));
    const newData = {
      labels: Object.values(newArray[0]),
      datasets: newArray.map((categ) => {
        return {
          type: "pie",
          label: categ,
          data: data.map((dado) => {
            return dado[categ];
          }),
        };
      }),
    };
    return (
      <Chart
        style={{ width: "100%", minHeight: "25rem" }}
        type="pie"
        data={newData}
        options={stackedOptionsUpdated}
      />
    );
  }

  //=======================================================
  function renderDataCards() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          {/* --------------- Card 1 --------------- */}
          <Card width="100%" name="Produção Bibliográfica">
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                <strong>Quantidade x Anos</strong>
              </p>
              <p>
                Clique no <strong> tipo de produção </strong> para inserir ou
                remover a seleção:
              </p>
            </div>
            {renderChart(lattes)}
          </Card>

          {/* --------------- Card 2 --------------- */}
          <Card width="100%" name="Produção Bibliográfica">
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                <strong>Média por docente x Anos</strong>
              </p>
              <p>
                Clique no <strong> tipo de produção </strong> para inserir ou
                remover a seleção:
              </p>
            </div>
            {/* {renderChart(MediaDocentesxAnos)} */}
          </Card>
        </div>
      </>
    );
  }

  //========================Return=========================
  return (
    <>
      {renderTitle()}
      {renderSelectCampusCard()}
      {renderIndicators()}
      {renderDataCards()}
    </>
  );
}
