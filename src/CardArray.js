import React from "react";
import FrontCard from './FrontCard.js';

const CardArray = ({characters}) => {
    return (
        <>
            {
                characters.map((user, i) => {
                    return (
                        <FrontCard
                        key={i}
                        name={characters[i].name}
                        />
                    )
                } )

            }

        </>
    )
}

export default CardArray;