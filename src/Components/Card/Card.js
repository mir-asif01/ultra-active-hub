import React from 'react';
import './Card.css'

const Card = ({exercise,handleAddToList}) => {
    const {img,name,time} = exercise
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Time : {time}s</p>
            <button onClick={()=>handleAddToList(time)} className='add-btn'>ADD TO LIST</button>
        </div>
    );
};

export default Card;