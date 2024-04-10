import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import FilterAndSort from "./components/FilterAndSort";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");

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

  function handleSetEditable(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditable: !task.isEditable } : task
      )
    );
  }

  function handleEditUpdateTask(id, name) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isEditable: !task.isEditable, name: name }
          : task
      )
    );
  }

  function handleDeleteTask(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
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
      <FilterAndSort setFilter={setFilter} setSortBy={setSortBy} />
      <List
        tasks={tasks}
        filter={filter}
        sortBy={sortBy}
        onUpdate={handleUpdateTask}
        onEditUpdate={handleEditUpdateTask}
        onDelete={handleDeleteTask}
        makeEditable={handleSetEditable}
      />
      <button className="btn btn-primary mb-2" onClick={handleClearAll}>
        Clear
      </button>
      <Footer tasks={tasks} />
    </div>
  );
}

export default App;
