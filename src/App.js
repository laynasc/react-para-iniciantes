import React, { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskLits from "./components/TaskList/TaskList";

const task = {
  id: 0,
  titulo: "Nova Tarefa",
  state: "Pendente"
};

let idAcc = 0;
generateld = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateld(),
      title,
      state
    };
    setTasks((existingtasks) => {
      return [...existingtasks, newTask];
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskLits title="Pendente" onAddtask={addTask} tasks={tasks} />
      </div>
    </div>
  );
}
