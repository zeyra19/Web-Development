import React from 'react';

const UserCard = (props) => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>
                    nuri bilge cart curt
                </div>
                <div className='description'>
                    {props.children}
                </div>
            </div>
            <div className='ui buttom button'>
                <i className='add icon'></i>
                Arkadaş Ekle
            </div>
        </div>
    )
}

export default UserCard;