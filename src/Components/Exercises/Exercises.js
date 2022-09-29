import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Exercises.css'

const Exercises = ({handleAddToList}) => {
    const [exercises,setExercises] = useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setExercises(data))
    },[])
    return (
        <div className='main-container'>
            {
                exercises.map(exercise=> <Card exercise={exercise} handleAddToList={handleAddToList}></Card>)
            }
        </div>
    );
};

export default Exercises;