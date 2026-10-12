import React from "react";

export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  const percentage =
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress-tracker">
      <h2>Progress Tracker</h2>

      <p>
        {completedTasks} out of {totalTasks} tasks Completed
      </p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}