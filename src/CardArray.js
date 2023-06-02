import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import React, { useState } from 'react';
import './Card.css';


const CardArray = ({characters, films}) => {

    const [selected, setSelected] = useState(characters[0]);


    return (
        <>
            <div className='selected-card'>
                <h1>Pizza</h1>
                <BackCard selected={selected} all_films={films} />
            </div>
            <div className='card-container'>
                {
                    characters.map((user, i) => {
                        const handleClick = () => {
                            console.log('user', user)
                            setSelected(user)
                        }
                        return (
                            <>
                                <FrontCard
                                    handleClick={handleClick}
                                    key={"f" + i}
                                    name={user.name}
                                />
                            </>
                        )
                    } )

                }
            </div>

        </>
    )
}

export default CardArray;