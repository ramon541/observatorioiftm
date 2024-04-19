import React from "react";
import {
  CardContainer,
  CentralContainer,
} from "../../styles/styled-components";
import Colors from "../../styles/Colors";
import ButtonIcon from "../ButtonIcon";

export default function Card({ name, image, openInfo, children, justifyLeft }) {
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
          {image && (
            <img
              style={{
                height: "2.25rem",
                objectFit: "contain",
                marginRight: "1rem",
              }}
              src={image}
            />
          )}
          <h3 style={{ color: Colors.textBlue }}>{name}</h3>
        </div>
        {openInfo && (
          <ButtonIcon onClick={openInfo} icon={"fa-circle-question"} />
        )}
      </div>
      <CentralContainer justifyContent={justifyLeft ? "flex-start" : null}>
        {children}
      </CentralContainer>
    </CardContainer>
  );
}