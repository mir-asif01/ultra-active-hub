import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Exercises.css'

const Exercises = () => {
    const [exercises,setExercises] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
    },[])
    console.log(exercises)
    return (
        <div className='main-container'>
            {
                exercises.map(exercise=> <Card exercise={exercise}></Card>)
            }
        </div>
    );
};

export default Exercises;