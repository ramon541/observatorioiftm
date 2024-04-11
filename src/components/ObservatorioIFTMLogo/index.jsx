import React from "react";
import { Chart } from "primereact/chart";
import styles from "./index.module.css";

export default function ObservatorioIFTMLogo() {
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
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [200, 70, 100],
        backgroundColor: ["#e60000", "#cca300", "#0000ff"],
        hoverBackgroundColor: ["#e60000", "#cca300", "#0000ff"],
      },
    ],
  };

  return (
    <div>
      <div className={styles.logo1}>
        <Chart
          style={{ marginTop: "-16px" }}
          width="40px"
          height="40px"
          type="doughnut"
          data={dataOGrande}
          options={optionsO}
        />
        <span className={styles.FonteLogo}>bservatório</span>
        <span className={styles.FonteLogo}>
          {" "}
          <strong>IFTM</strong>
        </span>
      </div>
    </div>
  );
}
