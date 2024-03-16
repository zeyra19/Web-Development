import React from 'react';
import './Hemisphere.css';
import northernPic from './images/northen.jpg';
import southernPic from './images/sorthen.jpg';

const hemisphereConfig = {
    Northern: {
        text: "burası kuzey yarım küre",
        picture: northernPic
    },
    Southern: {
        text: "burası güney yarım küre",
        picture: southernPic
    }
}
const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern': 'Southern'; //İFLİ YAPI
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt='hemisphere picture'></img>
                </div>
                <div className='ui teal bottom attached label'> 
                {/* css özelliğini kullandık texte */}
                    <h1> {text} </h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;