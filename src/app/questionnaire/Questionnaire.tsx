"use client";

import { TodoList } from "@/features/todo/todo-list/TodoList";
import SurveyCard from "@/features/survey-card/SurveyCard";
import Loading from "../loading";
import Heading from "@/shared/ui/Heading";
import { useQuestionnaire } from "@/shared/hooks/useQuestionnaire";

export default function QuestionnairePage() {
  const { questionnaire, isLoading, isError } = useQuestionnaire();

  return isLoading ? (
    <Loading />
  ) : isError || !questionnaire ? (
    <Heading
      size="2xl"
      title="Виникла помилка при завантаженні даних або дані відсутні."></Heading>
  ) : (
    <SurveyCard questionnaire={questionnaire}>
      <TodoList />
    </SurveyCard>
  );
}
