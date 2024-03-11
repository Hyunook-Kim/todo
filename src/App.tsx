import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { TodoStatusFilterType, TodoStatusFilter } from "./models/Todo";

function App() {
  const [statusFiltered, setStatusFiltered] = useState<TodoStatusFilterType>(
    TodoStatusFilter.all
  );

  return (
    <div>
      <Header
        statusFiltered={statusFiltered}
        onStatusFilteredChange={setStatusFiltered}
      />
      <TodoList statusFiltered={statusFiltered} />
    </div>
  );
}

export default App;
