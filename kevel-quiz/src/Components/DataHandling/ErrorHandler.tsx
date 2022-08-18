import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

interface ErrorHandlerProps {
  error: string;
}

export const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error }) => {
  return (
    <ErrorWrapper>
      <h3>Uh oh, looks like something's wrong!</h3>
      {error}
    </ErrorWrapper>
  );
};
