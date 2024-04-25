import { memo, useState } from "react";
import {
  Container,
  CentralContainer,
  CustomLink as Link,
  CustomAnchor as Anchor,
  Title,
} from "../../styles/styled-components";
import Card from "../../components/Card";

import { images } from "../../assets/images";
import Colors from "../../styles/Colors";
import Modal from "../../components/Modal";

export default memo(function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { OBS, IFTM } = images;

  //= ------------- Styles -------------
  const CardsContainer = {
    margin: "2rem 0 1rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: "2rem",
    width: "85%",
  };

  //= ------------- Texts -------------
  const text1 = `
    O Observatório tem como principal objetivo o mapeamento das áreas de pesquisa, perfis de professores e elaboração de indicadores de pesquisa. O Observatório faz parte do Grupo de Pesquisa em Mineração da Dados e Imagens (MiDI) do IFTM Campus Avançado Uberaba Parque Tecnológico. As estatísticas são realizadas usando o currículo Lattes dos professores permanentes da instituição.
    Para maiores informações,
  `;

  const text2 = `
    O Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro (IFTM) é composto, atualmente, pelos Campus Campina Verde, Ibiá, Ituiutaba, Paracatu, Patos de Minas, Patrocínio, Uberaba, Uberaba Parque Tecnológico, Uberlândia e Uberlândia Centro e pela Reitoria. A missão do IFTM é ofertar a Educação Profissional e Tecnológica por meio do Ensino, Pesquisa e Extensão.
    Para maiores informações, acesse
  `;

  const text3 = `
    Os indicadores são ferramentas de gestão que quantificam o desempenho dos docentes do IFTM, sendo essenciais para o seu aprimoramento.
    A lista de docentes é extraída do Portal da Transparência do Governo Federal anualmente.
    Os dados utilizados para a elaboração dos indicadores são extraídos da Plataforma Lattes mensalmente.
    Para saber mais sobre cada indicador, basta clicar no ícone 
  `;

  const text4 = `
    Você pode entrar em contato com a equipe de desenvolvimento do Observatório IFTM para relatar problemas, deixar sugestões ou comentários. Basta enviar um email para o líder do projeto.
    Para ler as principais dúvidas que surgem sobre esta ferramenta e conferir as respostas de cada pergunta, 
  `;

  //= ------------- Return -------------
  return (
    <>
      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        name="Sobre Atualização dos Dados"
      >
        <p style={{ textAlign: "justify" }}>
          {text3}{" "}
          <div
            style={{ color: Colors.textBlue }}
            className="fa-solid fa-circle-question"
          />{" "}
          (ao lado do título do indicador).
        </p>
      </Modal>
      <Container>
        <Title>Bem-vindo ao Observatório IFTM</Title>
        <CentralContainer>
          <div style={CardsContainer}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <Card image={OBS} name="Observatório">
                <p style={{ textAlign: "justify" }}>
                  {text1} <Link to="/observatorioiftm/sobre">clique aqui</Link>.
                </p>
              </Card>
              <Card image={IFTM} name="IFTM">
                <p style={{ textAlign: "justify" }}>
                  {text2}{" "}
                  <Anchor target="_blank" href="https://iftm.edu.br">
                    iftm.edu.br
                  </Anchor>
                  .
                </p>
              </Card>
            </div>
            <Card
              name="Atualização dos Dados"
              openInfo={() => setOpenModal(true)}
            >
              <p style={{ textAlign: "justify" }}>
                {text3}{" "}
                <div
                  style={{ color: Colors.textBlue }}
                  className="fa-solid fa-circle-question"
                />{" "}
                (ao lado do título do indicador).
              </p>
            </Card>
            <Card name="Entre em Contato">
              <p style={{ textAlign: "justify" }}>
                {text4} <Link to="/observatorioiftm/sobre">clique aqui</Link>.
              </p>
            </Card>
          </div>
        </CentralContainer>
      </Container>
    </>
  );
});
