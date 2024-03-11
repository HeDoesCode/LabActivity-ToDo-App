import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleUpdateTask(id) {
    let task = tasks.find((d) => d.id === id);

    console.log(task);
  }
  return (
    <div className="container text-center py-5">
      <Header />
      <Form onAddTask={handleAddTask} />
      <List tasks={tasks} onUpdate={handleUpdateTask} />
    </div>
  );
}

export default App;
