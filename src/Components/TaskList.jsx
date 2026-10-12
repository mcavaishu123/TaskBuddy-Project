import React from "react";

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  clearAllTasks,
}) {
  const toggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed,
    };

    updateTask(updatedTask, index);
  };

  return (
    <>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
          >
            <div className="task-info">
              <span className="task-name">{task.text}</span>

              <small className="task-details">
                {task.priority} | {task.category}
              </small>
            </div>

            <div className="task-actions">
              <button onClick={() => toggleComplete(index)}>
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="clear-btn">
        <button onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      </div>
    </>
  );
}