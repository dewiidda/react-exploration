import React from 'react';
import CardItem from './CardItem';
import './Card.css';


function Card() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem
                            src='../images/img-9.jpg'
                            text='Explore the amazing waterfall deep inside amazon jungle'
                            label='adventure'
                            path='/Services'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
