import React from "react";
import { StatusType, Todo } from "../../models/Todo";
import { FaTrashAlt } from "react-icons/fa";

interface IProps {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (deletedId: string) => void;
}

const TodoElement: React.FC<IProps> = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? StatusType.DONE : StatusType.ACTIVE;
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => onDelete(todo.id);

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === StatusType.DONE}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default TodoElement;
