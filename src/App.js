import React from "react";
import DoHeader from './components/DoHeader'
import List from "./components/DoList";

export default function App() {
  const [tasks, setTasks] = React.useState([{ id: 1, name: ''  }]);
  
  function AddTask() {
    setTasks(prevTasks => [...prevTasks, { id: prevTasks.length + 1, name: ''  }]);
  }

  function TaskNameChange(taskId, newName) {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === taskId ? { ...task, name: newName } : task))
    );
  }
    

  const result = tasks.map(task => (
    <List key={task.id} taskNameValue={task.name} TaskNameChange={newName => TaskNameChange(task.id, newName)} />
  ));

  return (
    <>
      <DoHeader AddBtn={AddTask} TaskNameChange={newName => TaskNameChange(tasks.length, newName)} />
      {result}
    </>
  )}
