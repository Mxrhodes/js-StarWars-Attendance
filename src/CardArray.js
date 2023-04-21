import React from "react";
import Card from './Card.js'


const CardArray = ({students}) => {
    return (
        <>
            {
                students.map((user, i) => {
                    console.log('student:', i)
                    return (
                        <Card
                        key={i}
                        name={students[i].name}
                        />
                    )
                } )

            }

        </>
    )
}

export default CardArray;