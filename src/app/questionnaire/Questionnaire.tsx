"use client";

import { TodoList } from "@/features/todo/todo-list/TodoList";
import SurveyCard from "@/features/survey-card/SurveyCard";
import Loading from "../loading";
import { useQuestionnaire } from "@/shared/hooks/useQuestionnaire";

export default function QuestionnairePage() {
  const { questionnaire, isLoading, isError } = useQuestionnaire();

  return isLoading ? (
    <Loading />
  ) : isError || !questionnaire ? (
    <h1 className="text-center font-medium pt-3">
      Виникла помилка при завантаженні даних або дані відсутні
    </h1>
  ) : (
    <SurveyCard questionnaire={questionnaire}>
      <TodoList />
    </SurveyCard>
  );
}
