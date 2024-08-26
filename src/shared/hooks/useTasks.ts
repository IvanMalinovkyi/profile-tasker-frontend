import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { taskService } from "../services/tasks.service";
import { toast } from "sonner";
import { ITask, TypeTaskFormState } from "../types/task.types";

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

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["tasks"],
    mutationFn: (id: string) => taskService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Завдання видалено успішно");
    },
    onError: () => {
      toast.error("Не вдалося видалити завдання");
    },
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: TypeTaskFormState) => taskService.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Завдання додано успішно");
    },
    onError: () => {
      toast.error("Не вдалося додати завдання");
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["tasks"],
    mutationFn: ({
      id,
      updateData,
    }: {
      id: string;
      updateData: Partial<ITask>;
    }) => taskService.updateTask(id, updateData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Завдання оновлено успішно");
    },
    onError: () => {
      toast.error("Не вдалося оновити завдання");
    },
  });
}
