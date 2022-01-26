import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" , timeneeded:"10 minutes", intensity:"easy" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", timeneeded:"30 minutes", intensity:"medium" },
      { id: 3, title: "Tidy up", deadline: "Today" , description: "Clean up kitchen presses", timeneeded:"55 minutes", intensity:"hard"}
    ]
  });
  return (
    <div className="container">
      <h1>This is Testie</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      timeneeded={task.timeneeded}
      intensity={task.intensity}
      key={task.id}
    />
  ))}
    </div>
  );
}

export default App;
