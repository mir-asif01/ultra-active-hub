import React, { useEffect, useState } from 'react';
import './List.css'

const List = ({time,setTime,id,notify}) => {
    const [breakTimes,setBreakTimes] = useState([])
    const [breakTime,setBreakTime] = useState(0)
    useEffect(()=>{
        fetch('breakTime.json')
        .then(res => res.json())
        .then(data => setBreakTimes(data))
    },[])
   
    const handleBreakTime = (breakTime) =>{
        localStorage.setItem('b-time',JSON.stringify(breakTime))
        setBreakTime(breakTime)
    }

    useEffect(()=>{
        let btfls = JSON.parse(localStorage.getItem("b-time"));
        setBreakTime(btfls)
    })

    return (
        <div className='list'>
            <div className="profile-section">
                <div className="name-img">
                    <div className="img">
                        <img src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top" alt="" />
                    </div>
                    <div className="name">
                        <h3>Mir Kamrul Ahsan Asif</h3>
                        <p>Bogura,Bangladesh</p>
                    </div>
                </div>
                <div className="info-section">
                    <div>
                        <div><p>Weight</p></div>
                        <div><p>60kg</p></div>
                    </div>
                    <div>
                        <div><p>Height</p></div>
                        <div><p>5.7"</p></div>
                    </div>
                    <div>
                        <div><p>Age</p></div>
                        <div><p>20yr</p></div>
                    </div>
                </div>
            </div>
            <div className="add-break-section">                
                <h3>Add A Break</h3>
                <div className="times">
                    {
                        breakTimes.map(t=><div><button onClick={()=>handleBreakTime(t.time)}>{t.time}s</button></div>)
                    }
                    
                </div>
            </div>
            <div className="detail-section">
                <h3>Execise Details</h3>
                <div className="exercise-time">
                    <div><p>Exercise Time</p></div>
                    <div><p>{time} seconds</p></div>
                </div>
                <div className="break-time">
                    <div><p>Break Time</p></div>
                    <div><p>{breakTime} seconds</p></div>
                </div>
            </div>
            <button className='ac-comp' onClick={notify}>Activity Completed</button>
        </div>
    );
};

export default List;