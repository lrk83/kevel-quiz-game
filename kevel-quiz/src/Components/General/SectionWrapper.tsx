import React from "react";
import styled from "styled-components";

const StyledSection = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 5px;
`;

interface SectionProps {
  children: JSX.Element;
}

export const SectionWrapper: React.FC<SectionProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};
