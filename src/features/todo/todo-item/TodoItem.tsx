import styles from "./TodoItem.module.scss";
import clsx from "clsx";
import { Button } from "@/shared/ui/buttons/Button";
import { ITask } from "@/shared/types/task.types";
import { Pencil } from "lucide-react";

interface TodoProps {
  todo: ITask;
  deleteTodoItem: (id: string) => void;
  updateTodo: (data: { id: string; updateData: Partial<ITask> }) => void;
  editTodoItem: (todo: ITask) => void;
}

export default function TodoItem({
  todo,
  deleteTodoItem,
  updateTodo,
  editTodoItem,
}: TodoProps) {
  const handleCheckboxChange = () => {
    updateTodo({
      id: todo.id,
      updateData: { isCompleted: !todo.isCompleted },
    });
  };

  return (
    <li
      key={todo.id}
      className={`${styles.todoItem}`}>
      <input
        name="completed"
        type="checkbox"
        className={styles.checkbox}
        checked={todo.isCompleted}
        onChange={handleCheckboxChange}
      />
      <span
        className={clsx(styles.todoText, {
          [styles.completed]: todo.isCompleted,
        })}>
        {todo.name}
      </span>
      <Button
        variant="secondary"
        onClick={() => deleteTodoItem(todo.id)}>
        Видалити
      </Button>
      <div className={styles.edit}>
        <Pencil onClick={() => editTodoItem(todo)} />
      </div>
    </li>
  );
}
