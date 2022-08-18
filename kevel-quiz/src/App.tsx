import React, { useState } from "react";
import "./App.css";
import { PageTitle } from "./Components/General/Title";
import { OptionsSection } from "./Components/Options/OptionsSection";
import { QuizSection } from "./Components/Quiz/QuizSection";
import { useQuizData } from "./Hooks/useQuiz";

function App() {
  //Tracking state at top level so both halves of the app can access
  const { handleSubmit, didSubmit, questions, loading, err } = useQuizData();

  return (
    <div className="App">
      <PageTitle />
      <OptionsSection handleSubmit={handleSubmit} />
      <QuizSection
        didSubmit={didSubmit}
        questions={questions}
        loading={loading}
        err={err}
      />
    </div>
  );
}

export default App;
