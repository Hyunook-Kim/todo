import React from "react";
import { TodoStatus, Todo } from "../../models/Todo";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./TodoElement.module.css";

interface IProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (deletedId: string) => void;
}

const TodoElement: React.FC<IProps> = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? TodoStatus.done : TodoStatus.active;
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo.id);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === TodoStatus.done}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>

      <span className={styles.buttonWrapper}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default TodoElement;
