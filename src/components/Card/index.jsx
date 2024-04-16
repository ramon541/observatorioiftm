import React from "react";
import {
  CardContainer,
  CentralContainer,
} from "../../styles/styled-components";

export default function Card() {
  return (
    <CardContainer gap={1}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>Card</h2>
        </div>
        <p>X</p>
      </div>
      <CentralContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum
          rerum molestias corrupti non qui quo a pariatur quis? Aspernatur
          incidunt neque laboriosam veritatis ratione ex, minus illo nesciunt
          deleniti. Deserunt labore neque illo, voluptates ullam excepturi omnis
          vero dolorum, eveniet amet porro quos impedit beatae dolore non nisi
          cupiditate aliquid. Vitae excepturi earum expedita magnam corporis
          quas, non repellendus. Vel laudantium a ratione nam voluptatum itaque
          minus, sapiente deleniti nostrum iste unde, voluptates iusto maiores
          blanditiis culpa nulla inventore. Fuga quis repellat maxime hic odit
          unde temporibus qui in?
        </p>
      </CentralContainer>
    </CardContainer>
  );
}
