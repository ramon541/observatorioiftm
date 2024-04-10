/* eslint-disable react/prop-types */
import * as React from "react";
const AcessoAInformacao = ({ cursor, link }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 117 49"
    height={49}
    width={117}
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    style={{ cursor: cursor ? "pointer" : "default" }}
    onClick={() => (cursor ? window.open(link) : null)}
  >
    <defs>
      <style type="text/css">
        {".a {font: normal bold 11px Open Sans, sans-serif;}"}
      </style>
    </defs>
    <circle cx={22} cy={23} r={22} fill="#fff" />
    <path
      style={{
        stroke: "#222",
        strokeWidth: 9,
        strokeLinecap: "round",
      }}
      d="m 22,23 v 13"
    />
    <path
      style={{
        stroke: "#fff",
        strokeWidth: 4,
        strokeLinejoin: "round",
      }}
      d="m 4,43 3,-6 4,3 z"
    />
    <circle r={4.5} cy={11} cx={22} fill="#222" />
    <g fill="#fff">
      <text x={47} y={22}>
        <tspan className="a" y={18}>
          {"Acesso \xE0"}
        </tspan>
        <tspan className="a" x={47} y={31}>
          {"Informa\xE7\xE3o"}
        </tspan>
      </text>
    </g>
  </svg>
);
export default AcessoAInformacao;
