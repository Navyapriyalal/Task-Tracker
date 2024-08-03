import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react";
import AddTask from './components/AddTask';

const App=() => {
  const[showAddTask,setShowAddTask] = useState(false)

  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Mar 5th',
        remainder: true,
    },
    {
        id: 3,
        text: 'Grocery Shopping',
        day: 'Feb 25th',
        remainder: false,
    }
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id , ...task}
    setTasks ([...tasks,newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id ))
  }

  const toggleRemainder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task , remainder: !task.remainder } : task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
