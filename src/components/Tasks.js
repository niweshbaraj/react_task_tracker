// import { useState } from "react"     // if using it inside the below Tasks component
import Task from './Task'
// =================================================
// defining tasks below outside of component Tasks
// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting at School',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     },
// ]
// =================================================

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         text: 'Doctors Appointment',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: true,
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting at School',
    //         day: 'Feb 6th at 1:30pm',
    //         reminder: true,
    //     },
    //     {
    //         id: 3,
    //         text: 'Food Shopping',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: false,
    //     },
    //   ])
    
  return (
    <>
        {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />))}
    </>
  )
}

export default Tasks