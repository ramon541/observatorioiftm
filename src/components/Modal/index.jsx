import React from "react";
import {
  CardContainer,
  CentralContainer,
} from "../../styles/styled-components";
import ButtonIcon from "../ButtonIcon";
import Colors from "../../styles/Colors";

const bgStyle = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0, 0.7)",
  zIndex: "1000",
};

export default function Modal({
  isOpen,
  name,
  setModalOpen,
  justifyLeft,
  children,
}) {
  if (isOpen) {
    return (
      <>
        <div
          style={{
            zIndex: "1001",
            position: "fixed",
            top: "50%",
            left: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContainer gap={1} position="fixed" maxWidth="50rem">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "2rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ color: Colors.textBlue }}>{name}</h3>
              </div>
              <ButtonIcon icon="fa-xmark" onClick={setModalOpen} />
            </div>
            <CentralContainer
              justifyContent={justifyLeft ? "flex-start" : null}
            >
              {children}
            </CentralContainer>
          </CardContainer>
        </div>
        <div style={bgStyle} onClick={setModalOpen} />
      </>
    );
  }

  return null;
}
