import { useEffect, useState } from 'react';
import './App.css';
import Exercises from './Components/Exercises/Exercises';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  const [time, setTime] = useState(0)
  let prevTime = time
  const handleAddToList = (time) => {
    let newTime = time + prevTime;
    localStorage.setItem('exerciseTime', JSON.stringify(newTime));
    setTime(newTime)
  }

  useEffect(() => {
    let etfls = JSON.parse(localStorage.getItem('exerciseTime'))
    setTime(etfls)
  }, [time])
  return (
    <div className='App'>
      <div className="left-section">
        <Header></Header>
        <h3>Exeecises For Today</h3>
        <Exercises handleAddToList={handleAddToList}></Exercises>
      </div>
      <div className="right-section">
        <List handleAddToList={handleAddToList} time={time} setTime={setTime} notify={notify}></List>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
