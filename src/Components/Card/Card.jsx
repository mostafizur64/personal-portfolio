import React from 'react';
import './Card.css'
const Card = ({HeartEmoji,heading,details}) => {
    return (
        <div>
            <div className="card">
                <img src={HeartEmoji} alt="" />
                <span>{heading}</span>
                <span>{details}</span>

                <button className='c-button'>Learn more</button>
            </div>
        </div>
    );
};

export default Card;
