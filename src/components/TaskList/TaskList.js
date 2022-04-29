import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const AddTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
      {tasks.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
      <button onClick={AddTask}>Adicionar Tarefa </button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
