"use client";

import { Button } from "@/shared/ui/buttons/Button";
import { FormEvent, useState } from "react";
import styles from "./TodoList.module.scss";
import TodoItem from "../todo-item/TodoItem";
import Heading from "@/shared/ui/Heading";
import { useGetTasks } from "@/shared/hooks/useGetTasks";
import { toast } from "sonner";
import { ITask } from "@/shared/types/task.types";
import Loading from "@/app/loading";
import {
  useCreateTask,
  useDeleteTask,
  useUpdateTask,
} from "@/shared/hooks/useTasks";

export function TodoList() {
  const [newTodoText, setNewTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState<ITask | null>(null);
  const { tasks, isLoading } = useGetTasks();
  const deleteMutation = useDeleteTask();
  const createTask = useCreateTask();
  const updateTask = useUpdateTask();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newTodoText) {
      if (editingTodo) {
        const editingTodoData = {
          name: newTodoText,
          isCompleted: editingTodo.isCompleted,
        };
        updateTask.mutate({ id: editingTodo.id, updateData: editingTodoData });
        setEditingTodo(null);
      } else {
        const newTodo: ITask = {
          id: String(Date.now()),
          name: newTodoText,
          isCompleted: false,
        };
        createTask.mutate(newTodo);
      }

      setNewTodoText("");
    } else {
      toast.error("Заповніть поля");
    }
  };

  const editTodoItem = (todo: ITask) => {
    setEditingTodo(todo);
    setNewTodoText(todo.name);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <form
        className={`${styles.form}`}
        onSubmit={handleSubmit}>
        <Heading title="Мій todo-лист на цей місяць" />
        <div className={`${styles.inputWrapper}`}>
          <input
            type="text"
            name="todo"
            value={newTodoText}
            placeholder="Що хочете вивчити?"
            className={`${styles.inputField}`}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <div className="ml-4">
            <Button
              type="submit"
              variant="primary">
              {editingTodo ? "Оновити" : "Додати"}
            </Button>
          </div>
        </div>
      </form>

      <ul className="space-y-4">
        {tasks?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodoItem={deleteMutation.mutate}
            updateTodo={updateTask.mutate}
            editTodoItem={editTodoItem}
          />
        ))}
      </ul>
    </>
  );
}
