import { useState } from 'react';
import './App.css';
import Exercises from './Components/Exercises/Exercises';
import Header from './Components/Header/Header';
import List from './Components/List/List';

function App() {
  const [time,setTime] = useState(0)
  let prevTime = time
  const handleAddToList = (time) =>{
    if(time){
      let newTime = time + prevTime;
      console.log(newTime)
      localStorage.setItem('exerciseTime',JSON.stringify(newTime))

      let exerciseTimeFromLS = localStorage.getItem("exerciseTime");
      if(exerciseTimeFromLS){
        setTime(JSON.parse(exerciseTimeFromLS));
        return;
      }
      else{
        setTime(newTime);
        return;
        }
      // console.log(exerciseTimeFromLS)
     
      // if(exerciseTime){
      //   console.log('hi ls')
      // }
      // setTime(exerciseTime)
    }
    
  }
  return (
    <div className='App'>
      <div className="left-section">
        <Header></Header>
        <h3>Exeecises For Today</h3>
        <Exercises handleAddToList={handleAddToList}></Exercises>
      </div>
      <div className="right-section">
        <List handleAddToList={handleAddToList} time={time} setTime={setTime}></List>
      </div>
    </div>
  );
}

export default App;
