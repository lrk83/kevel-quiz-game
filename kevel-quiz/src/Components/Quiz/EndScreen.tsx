import React from "react";
import { TRAVIS_TEXT } from "../../Constants/travisText";
import { Travis } from "./Travis";

export const EndScreen: React.FC = () => {
  return <Travis text={TRAVIS_TEXT.ending} />;
};
