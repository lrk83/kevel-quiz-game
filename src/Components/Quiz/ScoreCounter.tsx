import React from "react";
import { SCORE_COUNTER } from "../../Constants/constants";

interface ScoreProps {
  score: number;
}

export const ScoreCounter: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div>
      {SCORE_COUNTER}
      {score}
    </div>
  );
};
