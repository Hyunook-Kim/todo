import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoElement from "../Todo/TodoElement";
import { StatusType, Todo } from "../../models/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "nice", status: StatusType.ACTIVE },
    { id: "2", text: "good", status: StatusType.ACTIVE },
  ]);

  const handleAdd = (todo: Todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated: Todo) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (deletedId: string) => {
    setTodos(todos.filter((todo) => todo.id !== deletedId));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => (
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
}
