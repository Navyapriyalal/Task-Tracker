import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"

const App=() => {
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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id ))
  }

  const toggleRemainder = (id) => {
    console.log('Hello')
    setTasks(tasks.map((task) => task.id === id ? { ...task , remainder: !task.remainder } : task))
  }
  return (
    <div className="container">
      <Header /> 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
