import styled from "styled-components";
import Colors from "../Colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "2rem")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.alignItem ? props.alignItem : "start")};
`;

export const TextHover = styled.a`
  color: ${(props) => (props.color ? props.color : Colors.white)};
  cursor: pointer;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  text-decoration: none;

  padding: ${(props) => (props.padding ? props.padding : "0px")};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : "0px")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "0px")};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "0px"};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "0px"};

  margin: ${(props) => (props.margin ? props.margin : "0px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : "0px")};

  &:hover {
    color: ${Colors.hoverBlue};
    background: none;
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1.25rem;
  min-width: 1.25rem;
  background-color: ${Colors.gray};
  border-radius: 100vmax;

  &:hover {
    background-color: ${Colors.lightBlue};
  }
`;

export const OptionContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  border: 1px solid transparent;
  border-top: ${(props) =>
    props.noBorder ? "1px solid transparent" : "1px solid #CCCCCC"};
  color: ${Colors.textBlue};

  &:hover {
    background-color: ${Colors.lightBlue};
  }
`;

export const LinkOptionContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.noBorder ? "1rem 2rem 1rem 2rem" : "1rem")};
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  border: 1px solid transparent;
  border-top: ${(props) =>
    props.noBorder ? "1px solid transparent" : "1px solid #CCCCCC"};
  color: ${Colors.textBlue};

  &:hover {
    background-color: ${Colors.lightBlue};
  }
`;
export const CustomLink = styled(Link)`
  color: ${Colors.textBlue};
  &:hover {
    color: ${Colors.textLightBlue};
  }
`;

export const CustomAnchor = styled.a`
  color: ${Colors.textBlue};
  &:hover {
    color: ${Colors.textLightBlue};
  }
`;

export const CardContainer = styled.div`
  border: 2px solid transparent;
  border-top: 2px solid ${Colors.blue};
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  gap: ${(props) => (props.gap ? props.gap : "0")}rem;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "25rem")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
  width: ${(props) => (props.width ? props.width : null)};
  z-index: ${(props) => (props.zIndex ? props.zIndex : null)};
  position: ${(props) => (props.position ? props.position : null)};
`;

export const CentralContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  gap: ${(props) => (props.gap ? props.gap : "0")}rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : Colors.textBlue)};
`;

export const SecondTitle = styled.h2`
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : Colors.textBlue)};
`;

export const ThirdTitle = styled.h3`
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : Colors.textBlue)};
`;

export const Small = styled.small`
  color: ${(props) => (props.color ? props.color : Colors.darkGray)};
`;

export const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border: 1px solid ${Colors.blue};
`;
