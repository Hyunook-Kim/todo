import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { TodoStatusFilterType, TodoStatusFilter } from "./models/Todo";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [statusFiltered, setStatusFiltered] = useState<TodoStatusFilterType>(
    TodoStatusFilter.all
  );

  return (
    <DarkModeProvider>
      <Header
        statusFiltered={statusFiltered}
        onStatusFilteredChange={setStatusFiltered}
      />
      <TodoList statusFiltered={statusFiltered} />
    </DarkModeProvider>
  );
}

export default App;
