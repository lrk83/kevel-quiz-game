import React, { useEffect, useState } from "react";
import { TOTAL_QUESTIONS } from "../Constants/constants";
import { TRAVIS_TEXT } from "../Constants/travisText";

export interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface useQuizDataHooks {
  handleSubmit: (url: string) => void;
  questions: Question[] | null;
  loading: boolean;
  err: string | null;
  didSubmit: boolean;
  score: number;
  setScore: (num: number) => void;
  currentIndex: number;
  submitAnswer: (ans: string, ques: Question) => void;
  handleChange: (
    e: React.FormEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => void;
  travisText: string;
  gameState: string;
}

//This is getting big enough that it should probably be split up some

export const useQuizData = (): useQuizDataHooks => {
  const [questions, setQuestions] = useState(null);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [didSubmit, setDidSubmit] = useState(false);
  const [travisText, setTravisText] = useState(TRAVIS_TEXT.basic);
  const [gameState, setGameState] = useState("playing");

  const handleSubmit: (url: string) => void = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setQuestions(result.results);
      setDidSubmit(true);
    } catch (err) {
      console.log(err);
      setDidSubmit(true);
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = (ans: string, ques: Question): void => {
    console.log(ans);
    console.log(ques.correct_answer);

    if (ans === ques.correct_answer) {
      setScore(score + 1);
      setTravisText(TRAVIS_TEXT.correct[Math.abs(score)]);
    } else {
      setScore(score - 1);
      setTravisText(TRAVIS_TEXT.incorrect[0]);
    }

    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setGameState("finished");
  };

  const handleChange = (
    e: React.FormEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ): void => {
    setState(e.currentTarget.value);
  };

  return {
    handleSubmit,
    questions,
    loading,
    err,
    didSubmit,
    score,
    setScore,
    currentIndex,
    submitAnswer,
    handleChange,
    travisText,
    gameState,
  };
};
