import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
     <h1>This is Testie</h1>
     <Task title="Dishes" deadline="Today" description="Empty the dishwasher" /> 
      <Task title="Laundry" deadline="Tomorrow" description="Put the white load on" /> 
      <Task title="Tidy" deadline="Today" description="Tidy the Shed" /> 
    </div>
  );
}

export default App;
