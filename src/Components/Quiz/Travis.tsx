import React, { useState } from "react";
import styled from "styled-components";
import { TRAVIS_TEXT } from "../../Constants/travisText";
import { DialogBox } from "./DialogBox";

const StyledTravis = styled.img`
  max-height: 150px;
`;

const TravisWrapper = styled.div`
    display: flex
    flex-direction: row
`;

interface TravisProps {
  text: string;
}

export const Travis: React.FC<TravisProps> = ({ text }) => {
  return (
    <TravisWrapper>
      <DialogBox text={text}></DialogBox>
      <div>
        <StyledTravis src="https://previews.123rf.com/images/memoangeles/memoangeles1506/memoangeles150600013/41086426-fat-cartoon-troll-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-.jpg" />
      </div>
    </TravisWrapper>
  );
};
