import React from "react";
import styled from "styled-components";
import { PAGE_TITLE } from "../../Constants/constants";

const StyledPageTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const PageTitle: React.FC = ({}) => {
  return <StyledPageTitle> {PAGE_TITLE} </StyledPageTitle>;
};
