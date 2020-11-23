import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  cursor: pointer;
  stroke: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
`;

export default Svg;