// import React from 'react'  // for using class based render, import this
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
  ])

// Add Task
const addTask = (task) => {
  // console.log(task)
  const id = Math.floor(Math.random() * 10000) + 1

  // console.log(id)
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
  const deleteTask = (id) => {
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id);
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <>
      <NavBar />
      {/* <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> */}
      <Routes>
        
        <Route
            path='/'
            element={
              <>
                {<Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />}
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
              </>
            }
          />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <div className="container">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
              </>
            }
          />
        </div> */}
      </Routes>
    </>
    // <div>
    //   <NavBar />
    //   <Routes>
    //     <div className="container">
          
    //       <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
    //       {showAddTask && <AddTask onAdd={addTask} />}
    //       {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //     </div>
    //   </Routes>
    // </div>
    
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class </h1>
//   }
// }

export default App;
