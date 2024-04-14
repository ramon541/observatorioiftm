import styled from "styled-components";
import Colors from "../Colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "2em")};
`;

export const TextHover = styled.a`
  color: ${(props) => (props.color ? props.color : Colors.white)};
  cursor: pointer;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  text-decoration: none;

  padding: ${(props) => (props.padding ? props.padding : "0px")};
  paddingtop: ${(props) => (props.paddingTop ? props.paddingTop : "0px")};
  paddingleft: ${(props) => (props.paddingLeft ? props.paddingLeft : "0px")};
  paddingbottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : "0px"};
  paddingright: ${(props) => (props.paddingRight ? props.paddingRight : "0px")};

  margin: ${(props) => (props.margin ? props.margin : "0px")};
  margintop: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  marginleft: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  marginbottom: ${(props) => (props.marginBottom ? props.marginBottom : "0px")};
  marginright: ${(props) => (props.marginRight ? props.marginRight : "0px")};

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
