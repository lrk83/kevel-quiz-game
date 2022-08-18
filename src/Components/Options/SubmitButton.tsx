import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 50%;
  margin: 3px;
  marginbottom: 10px;
`;

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return <StyledButton onClick={onClick}> Submit </StyledButton>;
};
