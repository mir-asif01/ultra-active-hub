import React from 'react';
import './List.css'

const List = () => {
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
                    <div className='time'><button>10s</button></div>
                    <div className='time'><button>20s</button></div>
                    <div className='time'><button>30s</button></div>
                    <div className='time'><button>40s</button></div>
                    <div className='time'><button>50s</button></div>
                </div>
            </div>
            <div className="detail-section">
                <h3>Execise Details</h3>
                <div className="exercise-time">
                    <div><p>Exercise Time</p></div>
                    <div><p>{0}s</p></div>
                </div>
                <div className="break-time">
                    <div><p>Break Time</p></div>
                    <div><p>{0}s</p></div>
                </div>
            </div>
        </div>
    );
};

export default List;