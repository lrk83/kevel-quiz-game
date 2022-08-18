import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  margin: 10px;
  padding: 10px;
`;

interface DialogProps {
  text: string;
}

export const DialogBox: React.FC<DialogProps> = ({ text }) => {
  return <StyledBox>{text}</StyledBox>;
};
