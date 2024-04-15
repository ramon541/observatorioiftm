/* eslint-disable react/prop-types */
import { memo, useCallback, useState } from "react";
import {
  OptionContainer,
  LinkOptionContainer,
} from "../../../styles/styled-components";
import Colors from "../../../styles/Colors";

export default memo(function MenuOptions({ label, icon, link, data }) {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => setOpen((c) => !c), []);
  return link ? (
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
  ) : (
    <>
      <OptionContainer onClick={handleClick}>
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
        <div className={`fa-solid fa-angle-${open ? "up" : "down"}`} />
      </OptionContainer>
      {open &&
        data.map((option, index) => {
          return (
            <LinkOptionContainer
              to={option.route}
              key={index * 10}
              noBorder
              bg={Colors.gray}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                <div className={`fa-solid ${option.icon}`} />
                <p>{option.label}</p>
              </div>
            </LinkOptionContainer>
          );
        })}
    </>
  );
});
