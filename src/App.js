import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleUpdateTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completion: !task.completion } : task
      )
    );
  }

  function handleDeleteTask(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((tasks) => tasks.filter((task) => task.id != id));
    }
    return;
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setTasks([]);
    }
    return;
  }

  return (
    <div className="container text-center py-5">
      <Header />
      <Form onAddTask={handleAddTask} />
      <List
        tasks={tasks}
        onUpdate={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
      <button className="btn btn-primary mb-2" onClick={handleClearAll}>
        Clear
      </button>
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
