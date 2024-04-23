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
import { getCitiesAndData } from "../../db";
import Modal from "../../components/Modal";

export default function Campus() {
  const { CityData } = getCitiesAndData();
  const [campus, setCampus] = useState(CityData[0].cidade.nome);
  const [data, setData] = useState(CityData[0]);
  const [modals, setModals] = useState({
    openModal1: false,
    openModal2: false,
    openModal3: false,
    openModal4: false,
    openModal5: false,
    openModal6: false,
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
  function renderModals() {
    return (
      <>
        <Modal
          isOpen={modals.openModal1}
          setModalOpen={() => toggleModal("openModal1")}
          name="Sobre Atualização dos Dados"
        >
          <p style={{ textAlign: "justify" }}>Oi 1</p>
        </Modal>

        <Modal
          isOpen={modals.openModal2}
          setModalOpen={() => toggleModal("openModal2")}
          name="Sobre Atualização dos Dados"
        >
          <p style={{ textAlign: "justify" }}>Oi 2</p>
        </Modal>
      </>
    );
  }

  //=======================================================
  function renderTitle() {
    return (
      <>
        <Title>Indicadores por Campus</Title>
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
          <Card
            width="100%"
            name="Produção Bibliográfica"
            openInfo={() => toggleModal("openModal1")}
          >
            Oi 1
          </Card>
          <Card
            width="100%"
            name="Produção Bibliográfica"
            openInfo={() => toggleModal("openModal1")}
          >
            Oi 2
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <Card
            width="100%"
            name="Docentes Com Produção Bibliográfica"
            openInfo={() => toggleModal("openModal2")}
          >
            Oi 3
          </Card>
          <Card
            width="100%"
            name="Docentes Com Produção Bibliográfica"
            openInfo={() => toggleModal("openModal2")}
          >
            Oi 4
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            gap: "2rem",
          }}
        >
          <Card
            width="100%"
            name="Produção Em Periódicos"
            openInfo={() => toggleModal("openModal2")}
          >
            Oi 5
          </Card>
          <Card
            width="100%"
            name="Produção Em Periódicos"
            openInfo={() => toggleModal("openModal2")}
          >
            Oi 6
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
