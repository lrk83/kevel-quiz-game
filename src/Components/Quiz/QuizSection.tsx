import React from "react";
import { QUIZ_SECTION_HEADER } from "../../Constants/constants";
import { Question, useQuizData } from "../../Hooks/useQuiz";
import { ErrorHandler } from "../DataHandling/ErrorHandler";
import { LoadingHandler } from "../DataHandling/LoadingHandler";
import { Header } from "../General/Header";
import { SectionWrapper } from "../General/SectionWrapper";
import { QuestionWrapper } from "./QuestionWrapper";
import { ScoreCounter } from "./ScoreCounter";
import { EndScreen } from "./EndScreen";

interface QuizSectionProps {
  didSubmit: boolean;
  questions: Question[] | null;
  loading: boolean;
  err: string | null;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  didSubmit,
  questions,
  loading,
  err,
}) => {
  const { score, travisText, currentIndex, submitAnswer, gameState } =
    useQuizData();

  if (loading) {
    return <LoadingHandler />;
  }

  if (err) {
    return <ErrorHandler error={err} />;
  }

  return (
    <SectionWrapper>
      {didSubmit && questions != null ? (
        <div>
          <Header text={QUIZ_SECTION_HEADER} />
          <ScoreCounter score={score} />
          {gameState === "playing" ? (
            <QuestionWrapper
              questions={questions}
              currentIndex={currentIndex}
              submitAnswer={submitAnswer}
              travisText={travisText}
            />
          ) : (
            <EndScreen />
          )}
        </div>
      ) : (
        <></>
      )}
    </SectionWrapper>
  );
};
