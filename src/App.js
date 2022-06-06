// import Intro from './components/Intro'
// import React from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";

function App() {
  // const name = "Zakaria"
  // const x = true
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false)
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    //the tasks are the ones with an id that are not similar to the one passed in ('id' variable param)
  }

  //Toggle Reminder
  const toggleReminder = (id)=> {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      {/* <h1>Hello From React</h1>
      <h2>Hello {1 + 1}</h2>
      <h3>{name}</h3>
      <h4>Hello {x ? 'Yes' : 'No'}</h4>
      <Intro title='I am a prop title'></Intro>
      <Intro number={2022}></Intro> */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker"></Header>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No Tasks To Show'}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
