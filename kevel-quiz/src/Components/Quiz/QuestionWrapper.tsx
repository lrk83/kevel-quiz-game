import React, { useEffect, useState } from "react";
import {
  decodeHtml,
  generateQuestionOptions,
} from "../../Helpers/dataFormatting";
import { Question } from "../../Hooks/useQuiz";
import { CardWrapper } from "../General/CardWrapper";
import { DropDown } from "../General/DropDown";
import { SubmitButton } from "../Options/SubmitButton";
import { Travis } from "./Travis";

interface QuestionProps {
  questions: Question[];
  currentIndex: number;
  submitAnswer: (ans: string, ques: Question) => void;
  travisText: string;
}

export const QuestionWrapper: React.FC<QuestionProps> = ({
  questions,
  currentIndex,
  submitAnswer,
  travisText,
}) => {
  const options = generateQuestionOptions(questions[currentIndex]);
  const [answer, setAnswer] = useState(options[0].value);

  useEffect(() => {
    setAnswer(options[0].value);
  }, [currentIndex]);

  return (
    <div>
      <Travis text={travisText} />
      <CardWrapper>
        <DropDown
          label={decodeHtml(questions[currentIndex].question)}
          value={answer}
          options={options}
          onChange={(e) => {
            setAnswer(e.currentTarget.value);
          }}
        />
      </CardWrapper>
      <SubmitButton
        onClick={() => submitAnswer(answer, questions[currentIndex])}
      />
    </div>
  );
};
