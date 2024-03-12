import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';

const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment />
            <SingleComment />
            <SingleComment />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)