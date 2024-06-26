﻿import { memo } from "react";
import { Chart } from "primereact/chart";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default memo(function ObservatorioIFTMLogo({ black, small }) {
  const optionsO = {
    title: {
      display: false,
    },
    legend: {
      display: false,
      position: "bottom",
    },
  };
  const dataOGrande = {
    datasets: [
      {
        data: [200, 70, 100],
        backgroundColor: ["#e60000", "#cca300", "#0000ff"],
        hoverBackgroundColor: ["#e60000", "#cca300", "#0000ff"],
      },
    ],
  };

  return (
    <Link to="/observatorioiftm/">
      <div className={styles.logo1}>
        <Chart
          style={{ marginTop: "-16px" }}
          width={small ? "35px" : "40px"}
          height={small ? "35px" : "40px"}
          type="doughnut"
          data={dataOGrande}
          options={optionsO}
        />
        <div
          style={{
            fontSize: small ? "16px" : "20px",
            color: black ? "black" : "white",
          }}
        >
          <span>bservatório</span>
          <span>
            {" "}
            <strong>IFTM</strong>
          </span>
        </div>
      </div>
    </Link>
  );
});
