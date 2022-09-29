import React from 'react';
import './Card.css'

const Card = ({exercise}) => {
    const {img,name,time} = exercise
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>Time : {time}s</p>
            <button className='add-btn'>ADD TO LIST</button>
        </div>
    );
};

export default Card;