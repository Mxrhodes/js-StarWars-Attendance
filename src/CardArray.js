import React from "react";
import Card from './Card.js'


const CardArray = ({characters}) => {
    return (
        <>
            {
                characters.map((user, i) => {
                    return (
                        <Card
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