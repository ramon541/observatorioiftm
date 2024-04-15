import Colors from "../../styles/Colors";

import ObservatorioIFTMLogo from "../ObservatorioIFTMLogo";
import MenuOptions from "./MenuOptions";

export default function Menu() {
  const options = [
    {
      label: "Home",
      icon: "fa-home",
      menus: null,
      route: "/observatorioiftm/",
    },
    {
      label: "Indicadores",
      icon: "fa-chart-pie",
      menus: [
        {
          label: "Produção Bibliográfica",
          icon: "fa-chart-line",
          menus: null,
          route: "producaobibliografica",
        },
        {
          label: "Orientações",
          icon: "fa-chart-column",
          menus: null,
          route: "orientacoes",
        },
        {
          label: "Inovação",
          icon: "fa-chart-area",
          menus: null,
          route: "inovacao",
        },
        {
          label: "Formação Acadêmica",
          icon: "fa-graduation-cap",
          menus: null,
          route: "formacaoacademica",
        },
        {
          label: "Temas de Pesquisa",
          icon: "fa-comments",
          menus: null,
          route: "temasdepesquisa",
        },
      ],
      route: null,
    },
    {
      label: "Docentes",
      icon: "fa-people-group",
      menus: [
        {
          label: "Consulta por Nome",
          icon: "fa-id-card",
          menus: null,
          route: "consultanome",
        },
        {
          label: "Consulta por Temas de Pesquisa",
          icon: "fa-book",
          menus: null,
          route: "consultatemaspesquisa",
        },
        {
          label: "Produção Científica",
          icon: "fa-hand-peace",
          menus: null,
          route: "producaocientifica",
        },
        {
          label: "Avaliação Pesquisador (Editais PROPI)",
          icon: "fa-calendar-check",
          menus: null,
          route: "avaliacaopesquisador",
        },
      ],
      route: null,
    },
    {
      label: "Login",
      icon: "fa-user",
      menus: null,
      route: "login",
    },
  ];

  function renderOptions() {
    return options.map((option, index) => (
      <MenuOptions
        label={option.label}
        icon={option.icon}
        link={option.route ?? null}
        data={option?.menus?.length > 0 ? option?.menus : null}
        key={index}
      />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: Colors.white,
        height: "100%",
        width: "100%",
        padding: "1rem",
      }}
    >
      <div style={{ marginBottom: "1.5rem", marginTop: "1rem" }}>
        <ObservatorioIFTMLogo black small />
      </div>
      {renderOptions()}
    </div>
  );
}
