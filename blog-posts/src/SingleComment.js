import React from 'react';
import profile1 from './image/cznburak.jpg'

const SingleComment = () => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={profile1} alt='profile picture' />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    Oğulcan
                </a>
                <div className='metadata'>
                    <span className='date'>
                        Bugün saat 14:00 de
                    </span>
                </div>
                <div className='text'>
                    tanrının favori kulu
                </div>
            </div>
        </div>

    )
}

export default SingleComment;