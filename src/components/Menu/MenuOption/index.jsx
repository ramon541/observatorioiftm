import { Link } from "react-router-dom";
import {
  OptionContainer,
  LinkOptionContainer,
} from "../../../styles/styled-components";
import Colors from "../../../styles/Colors";

export default function MenuOption({ label, icon, arrow, link, noBorder }) {
  return link ? (
    noBorder ? (
      <LinkOptionContainer to={link} noBorder bg={Colors.gray}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          <div className={`fa-solid ${icon}`} />
          <p>{label}</p>
        </div>
      </LinkOptionContainer>
    ) : (
      <LinkOptionContainer to={link}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
          }}
        >
          <div className={`fa-solid ${icon}`} />
          <p>{label}</p>
        </div>
      </LinkOptionContainer>
    )
  ) : (
    <OptionContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div className={`fa-solid ${icon}`} />
        <p>{label}</p>
      </div>
      {arrow && <div className={`fa-solid fa-angle-${arrow}`} />}
    </OptionContainer>
  );
}
