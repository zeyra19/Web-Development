import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/cznburak.jpg';
import profile2 from './image/kuzey.jpg';
import profile3 from './image/zehra.jpg';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <div>
                    bojack efsaneviydi bu animasyondaki felsefeyi nuri bilge cart curt bile yapmamıştır
                </div>
            </UserCard>
            <UserCard>
            {/* PROPS */}
            <SingleComment
                name='oğulcan'
                date='Bugün saat 14.00 de'
                text='tanrının favori kulu'
                picture= {profile1}
            />
            </UserCard>

            <SingleComment
                name='kuzey'
                date='Bugün saat 15.00 de'
                text='C+ kalite program '
                picture= {profile2}
            />

            <SingleComment
                name='zeyra'
                date='Bugün saat 16.00 da'
                text='küfürün en büyüğü bende lan tısğ'
                picture= {profile3}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)