import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Button Clicked");

    addTask({
      text: task,
      priority,
      category,
      completed: false,
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-wrap">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </div>

      <div className="select-row">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}