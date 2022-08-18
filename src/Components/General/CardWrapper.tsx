import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 5px;
`;

interface CardProps {
  children: JSX.Element;
}

export const CardWrapper: React.FC<CardProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
