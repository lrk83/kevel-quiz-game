import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h3`
  font-size: 1.25em;
  text-align: center;
  color: palevioletred;
`;

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return <StyledHeader> {text} </StyledHeader>;
};
