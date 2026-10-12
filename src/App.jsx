import React, { useState, useEffect } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import "./Style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? updatedTask : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return (
    <div className={darkMode ? "App" : "App light"}>
      <header>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️ Day" : "🌙 Night"}
        </button>
        <h1 className="title">TaskBuddy</h1>
        <p className="tagline">Your Friendly Task Manager</p>
      </header>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        clearAllTasks={clearAllTasks}
      />

      <ProgressTracker tasks={tasks} />
    </div>
  );
}