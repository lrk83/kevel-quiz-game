import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

const LoadingWrapper = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const LoadingHandler: React.FC = () => {
  return (
    <LoadingWrapper>
      <img src={logo} className="App-logo" alt="logo" />
      Loading...
    </LoadingWrapper>
  );
};
