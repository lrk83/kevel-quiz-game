import React, { useState } from "react";
import { Category, useCategoryFetch } from "./useCategoryFetch";

/*These SetStateAction<any> could be better typed. The possible undefined values are
there to allow users to not use those filters*/

interface UseOptionsHooks {
  difficulty: string | undefined;
  setDifficulty: React.Dispatch<React.SetStateAction<any>>;
  questionType: string | undefined;
  setQuestionType: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  error: string | null;
  categories: Category[] | undefined;
  selectedCategory: Category | undefined;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
  handleChange: (
    e: React.FormEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => void;
}

export const useOptions: () => UseOptionsHooks = () => {
  const { loading, error, categories, selectedCategory, setCategory } =
    useCategoryFetch();

  const [difficulty, setDifficulty] = useState(undefined);
  const [questionType, setQuestionType] = useState(undefined);

  const handleChange = (
    e: React.FormEvent<HTMLSelectElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setState(e.currentTarget.value);
  };

  return {
    difficulty,
    setDifficulty,
    questionType,
    setQuestionType,
    handleChange,
    loading,
    error,
    categories,
    selectedCategory,
    setCategory,
  };
};
