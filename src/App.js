import './App.css';
import Exercises from './Components/Exercises/Exercises';
import Header from './Components/Header/Header';
import List from './Components/List/List';

function App() {
  return (
    <div className='App'>
      <div className="left-section">
        <Header></Header>
        <h3>Exeecises For Today</h3>
        <Exercises></Exercises>
      </div>
      <div className="right-section">
        <List></List>
      </div>
    </div>
  );
}

export default App;
