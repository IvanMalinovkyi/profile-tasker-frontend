import { useQuery } from "@tanstack/react-query";
import { questionnaireService } from "../services/questionnaire.service";

export function useQuestionnaire() {
  const {
    data: questionnaire,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get questionnaire"],
    queryFn: () => questionnaireService.getQuestionnaire(),
    retry: false,
  });

  return { questionnaire, isLoading, isError };
}
