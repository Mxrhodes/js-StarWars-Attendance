import FrontCard from './FrontCard.js';
import BackCard from './BackCard.js';
import React, { useState } from 'react';
import './Card.css';


const CardArray = ({characters, films}) => {
    const [selected, setSelected] = useState([]);
    console.log('selected', selected);


    return (
        <>
            <div className='selected-card'>
                { selected.name && <BackCard selected={selected} all_films={films} /> }
            </div>
            <div className='card-container'>
                {
                    characters.map((user, i) => {
                        const handleClick = () => {
                            console.log('user', user)
                            setSelected(user)
                            console.log('selected 222', selected)
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