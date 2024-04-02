import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoElement from "../Todo/TodoElement";
import {
  TodoStatusFilterType,
  Todo,
  TodoStatus,
  TodoStatusFilter,
} from "../../models/Todo";
import styles from "./TodoList.module.css";

interface IProps {
  statusFiltered: TodoStatusFilterType;
}

const TodoList: React.FC<IProps> = ({ statusFiltered }) => {
  const [todos, setTodos] = useState<Todo[]>(() => getTodos());
  const handleAdd = (todo: Todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated: Todo) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deletedId: string) => {
    setTodos(todos.filter((todo) => todo.id !== deletedId));
  };

  const todosWithStatusFiltered =
    statusFiltered === TodoStatusFilter.all
      ? todos
      : todos.filter((todo) => todo.status === statusFiltered);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todosWithStatusFiltered.map((item) => (
          <TodoElement
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

function getTodos(): Todo[] {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export default TodoList;
