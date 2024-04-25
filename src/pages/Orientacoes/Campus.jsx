import { useState } from "react";
import {
  Small,
  Title,
  SecondTitle,
  ThirdTitle,
} from "../../styles/styled-components";
import Card from "../../components/Card";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { getCitiesAndData, getQtdxAnos, getMediaDocxAnos } from "../../db";
import Modal from "../../components/Modal";
import { Chart } from "primereact/chart";

export default function Campus() {
  const { CityData } = getCitiesAndData();
  const { QuantidadexAnos } = getQtdxAnos();
  const { MediaDocentesxAnos } = getMediaDocxAnos();
  const [campus, setCampus] = useState(CityData[0].cidade.nome);
  const [data, setData] = useState(CityData[0]);
  const [modals, setModals] = useState({
    openModal1: false,
  });

  //=======================================================
  function toggleModal(modalName) {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  }

  //=======================================================
  function onHandleChange(campus) {
    setCampus(campus);
    CityData.filter((data) => {
      data.cidade.nome === campus && setData(data);
    });
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
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };

    const newData = {
      labels: data.dados.map((dado) => {
        return dado.ano;
      }),
      datasets: data.categorias.map((categ) => {
        return {
          type: "bar",
          label: categ,
          data: data.dados.map((dado) => {
            return dado[categ];
          }),
        };
      }),
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
  const text1 = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p>
        <strong>Objetivo:</strong> Este indicador visa diagnosticar a producao
        cientifica do docente. Os tipos de producao a serem consideradas sao:
        artigo completo em evento; Resumo em evento; artigo em periodico;
        capitulo de livro e livro.
      </p>
      <p>
        <strong>Fonte dos dados:</strong> Docentes: Portal da Transparência do
        Governo Federal com atualizacao anual. Producao: Plataforma Lattes
      </p>
      <Small>
        Dados extraídos da Plataforma Lattes em <strong>28/12/2023</strong>
      </Small>
      <Small color="red">
        Os estratos do Qualis Periódicos são do Quadriênio 2017-2020
      </Small>
    </div>
  );

  //=======================================================
  const text2 = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p>
        <strong>Objetivo:</strong> Este indicador visa diagnosticar a quantidade
        de docentes que possuem alguma publicacao em periodicos, eventos, etc.
      </p>
      <p>
        <strong>Fonte dos dados: </strong>
        Docentes: Portal da Transparência do Governo Federal com atualizacao
        anual. Producao: Plataforma Lattes e Periodicos Qualis CAPES:
      </p>
      <Small>
        Dados extraídos da Plataforma Lattes em <strong>28/12/2023</strong>
      </Small>
      <Small color="red">
        Os estratos do Qualis Periódicos são do Quadriênio 2017-2020
      </Small>
    </div>
  );

  //=======================================================
  const text3 = (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p>
        <strong>Objetivo:</strong> Este indicador visa diagnosticar a producao
        cientifica do docente apenas em periodicos. As quantidades sao separadas
        pelos estratos dos periodicos.
      </p>
      <p>
        <strong>Fonte dos dados: </strong>
        Docentes: Portal da Transparência do Governo Federal com atualizacao
        anual. Producao: Plataforma Lattes e Periodicos Qualis CAPES:
      </p>
      <Small>
        Dados extraídos da Plataforma Lattes em <strong>28/12/2023</strong>
      </Small>
      <Small color="red">
        Os estratos do Qualis Periódicos são do Quadriênio 2017-2020
      </Small>
    </div>
  );

  //=======================================================
  function renderModals() {
    return (
      <>
        <Modal
          isOpen={modals.openModal1}
          setModalOpen={() => toggleModal("openModal1")}
          name="Sobre Produção Bibliográfica"
        >
          <p style={{ textAlign: "justify" }}>{text1}</p>
        </Modal>

        <Modal
          isOpen={modals.openModal2}
          setModalOpen={() => toggleModal("openModal2")}
          name="Sobre Docentes com Produção Bibliográfica"
        >
          <p style={{ textAlign: "justify" }}>{text2}</p>
        </Modal>

        <Modal
          isOpen={modals.openModal3}
          setModalOpen={() => toggleModal("openModal3")}
          name="Sobre Produção em Periódicos"
        >
          <p style={{ textAlign: "justify" }}>{text3}</p>
        </Modal>
      </>
    );
  }

  //=======================================================
  function renderTitle() {
    return (
      <>
        <Title>Indicadores de Orientações</Title>
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
          <Card
            width="100%"
            name="Produção Bibliográfica"
            openInfo={() => toggleModal("openModal1")}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                <strong>Quantidade x Anos</strong>
              </p>
              <p>
                Clique no <strong> tipo de produção </strong> para inserir ou
                remover a seleção:
              </p>
            </div>
            {renderChart(QuantidadexAnos)}
          </Card>

          {/* --------------- Card 2 --------------- */}
          <Card
            width="100%"
            name="Produção Bibliográfica"
            openInfo={() => toggleModal("openModal1")}
          >
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                <strong>Média por docente x Anos</strong>
              </p>
              <p>
                Clique no <strong> tipo de produção </strong> para inserir ou
                remover a seleção:
              </p>
            </div>
            {renderChart(MediaDocentesxAnos)}
          </Card>
        </div>
      </>
    );
  }

  //========================Return=========================
  return (
    <>
      {renderModals()}
      {renderTitle()}
      {renderSelectCampusCard()}
      {renderIndicators()}
      {renderDataCards()}
    </>
  );
}
