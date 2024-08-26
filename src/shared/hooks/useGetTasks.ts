import { useQuery } from "@tanstack/react-query";
import { taskService } from "../services/tasks.service";

export function useGetTasks() {
  const {
    data: tasks,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskService.getTasks(),
    retry: false,
  });

  return { tasks, isLoading, isSuccess };
}
