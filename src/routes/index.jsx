//= ------------- External libraries import -------------
import { createBrowserRouter } from "react-router-dom";

//= ------------- Pages components import -------------
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import ProducaoBibliografica from "../pages/ProducaoBibliografica";
import Orientacoes from "../pages/Orientacoes";
import Inovacao from "../pages/Inovacao";
import FormacaoAcademica from "../pages/FormacaoAcademica";
import ConsultaNome from "../pages/ConsultaNome";
import ConsultaTemasPesquisa from "../pages/ConsultaTemasPesquisa";
import ProducaoCientifica from "../pages/ProducaoCientifica";
import AvaliacaoPesquisador from "../pages/AvaliacaoPesquisador";
import Login from "../pages/Login";
import Sobre from "../pages/Sobre";

const routes = createBrowserRouter([
  {
    path: "/observatorioiftm/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "producaobibliografica",
        element: <ProducaoBibliografica />,
      },
      {
        path: "orientacoes",
        element: <Orientacoes />,
      },
      {
        path: "inovacao",
        element: <Inovacao />,
      },
      {
        path: "formacaoacademica",
        element: <FormacaoAcademica />,
      },
      {
        path: "consultanome",
        element: <ConsultaNome />,
      },
      {
        path: "consultatemaspesquisa",
        element: <ConsultaTemasPesquisa />,
      },
      {
        path: "producaocientifica",
        element: <ProducaoCientifica />,
      },
      {
        path: "avaliacaopesquisador",
        element: <AvaliacaoPesquisador />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
    ],
  },
]);

export default routes;
