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
  return (
    <div className="container">
      <Header /> 
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
