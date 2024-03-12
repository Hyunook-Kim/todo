import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoElement from "../Todo/TodoElement";
import {
  TodoStatusFilterType,
  Todo,
  TodoStatus,
  TodoStatusFilter,
} from "../../models/Todo";

interface IProps {
  statusFiltered: TodoStatusFilterType;
}

const TodoList: React.FC<IProps> = ({ statusFiltered }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "nice", status: TodoStatus.active },
    { id: "2", text: "good", status: TodoStatus.active },
  ]);

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

  return (
    <section>
      <ul>
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

export default TodoList;
