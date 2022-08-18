import React from "react";
import { OPTION_SECTION_HEADER } from "../../Constants/constants";
import {
  DIFFICULTIES,
  NUMBERS,
  QUESTION_TYPES,
} from "../../Constants/dataConstants";
import {
  formatCategories,
  generateAPICall,
} from "../../Helpers/dataFormatting";
import { useOptions } from "../../Hooks/useOptions";
import { ErrorHandler } from "../DataHandling/ErrorHandler";
import { LoadingHandler } from "../DataHandling/LoadingHandler";
import { Header } from "../General/Header";
import { SectionWrapper } from "../General/SectionWrapper";
import { DropDown } from "../General/DropDown";
import { SubmitButton } from "./SubmitButton";

interface OptionSectionProps {
  handleSubmit: (url: string) => void;
}

export const OptionsSection: React.FC<OptionSectionProps> = ({
  handleSubmit,
}) => {
  const {
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
  } = useOptions();

  /*Ideally we would probably drop these if statements and wrap the handles around bigger 
  sections of the app. Maybe track errors and such with useContext*/

  if (loading) {
    return <LoadingHandler />;
  }

  if (error) {
    return <ErrorHandler error={error} />;
  }

  return (
    <SectionWrapper>
      <>
        <Header text={OPTION_SECTION_HEADER} />
        <DropDown
          label={"Difficulty"}
          value={difficulty}
          options={DIFFICULTIES}
          onChange={(e) => {
            handleChange(e, setDifficulty);
          }}
        />
        <DropDown
          label={"Question Type"}
          value={questionType}
          options={QUESTION_TYPES}
          onChange={(e) => {
            handleChange(e, setQuestionType);
          }}
        />
        {categories && selectedCategory && (
          <DropDown
            label={"Category"}
            value={selectedCategory.id}
            options={formatCategories(categories)}
            onChange={(e) => {
              handleChange(e, setCategory);
            }}
          />
        )}
        <SubmitButton
          onClick={() => {
            handleSubmit(
              generateAPICall(difficulty, selectedCategory, questionType)
            );
          }}
        />
      </>
    </SectionWrapper>
  );
};
