import { Category } from "../Hooks/useCategoryFetch";
import { Option } from "../Components/General/DropDown";
import { BASE_QUESTIONS_ROUTE } from "../Constants/routes";
import { Question } from "../Hooks/useQuiz";

export const formatCategories: (categories: Category[]) => Option[] = (
  categories
) => {
  const formatted = [];
  for (let x = 0; x < categories.length; x++) {
    formatted.push({
      value: categories[x].id.toString(),
      label: categories[x].name,
    });
  }

  return formatted;
};

export const generateAPICall = (
  difficulty?: string,
  selectedCategory?: Category,
  questionType?: string
): string => {
  console.log(selectedCategory);

  let route = BASE_QUESTIONS_ROUTE;

  if (difficulty) {
    route += "&difficulty=" + difficulty;
  }

  if (questionType) {
    route += "&type=" + questionType;
  }

  if (selectedCategory && selectedCategory.id) {
    route += "&category=" + String(selectedCategory.id);
  }

  if (selectedCategory && !selectedCategory.id) {
    route += "&category=" + String(selectedCategory);
  }

  console.log(route);

  return route;
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const decodeHtml = (html: string) => {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export const generateQuestionOptions = (question: Question) => {
  const options = [];
  options.push({
    value: question.correct_answer,
    label: decodeHtml(question.correct_answer),
  });
  for (let x = 0; x < question.incorrect_answers.length; x++) {
    options.push({
      value: question.incorrect_answers[x],
      label: decodeHtml(question.incorrect_answers[x]),
    });
  }
  return shuffle(options);
};
