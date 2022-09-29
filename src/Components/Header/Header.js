import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src="https://media.istockphoto.com/vectors/dumbbell-vector-id1331186720?k=20&m=1331186720&s=612x612&w=0&h=cUrjMsuYARIaWajP1DzhQUONzycHBiw8_-APxBT2TKs=" alt="" />
            </div>
            <div className='name'><h2>Track Actitvities</h2></div>
        </div>
    );
};

export default Header;