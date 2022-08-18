import React, { useState, useEffect } from "react";
import { CATEGORY_ROUTE } from "../Constants/routes";

export interface Category {
  id: number;
  name: string;
}

interface CategoryFetchResponse {
  loading: boolean;
  error: string | null;
  categories: Category[] | undefined;
  selectedCategory: Category | undefined;
  setCategory: React.Dispatch<React.SetStateAction<any>>;
}

/*This could have been made a more general data fetching hook, which would be useful long 
term. Ultimatley I'd want to replace it with something like useSWR to reduse prop drilling*/

export const useCategoryFetch: () => CategoryFetchResponse = () => {
  const [categories, setCategories] = useState(undefined);
  const [selectedCategory, setCategory] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(CATEGORY_ROUTE)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.trivia_categories);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCategories(undefined);
        setCategory(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (categories) {
      setCategory(categories[0]);
    }
  }, [categories]);

  return {
    loading,
    error,
    categories,
    selectedCategory,
    setCategory,
  };
};
