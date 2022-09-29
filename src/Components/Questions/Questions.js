import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='Questions'>
            <div className="question">
                <h4>How ReactJS works?</h4>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className="question">
                <h4>Props vs State in ReactJS</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className="question">
                <h4>How many ways , we can use useEffect Hook execpt fetching data from API?</h4>
                <p>Setting up a subscription, and manually changing the DOM in React components are all examples of UseEffect usage.</p>
            </div>
        </div>
    );
};

export default Questions;