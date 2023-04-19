import React from "react";
import Card from './Card.js'


const CardArray = ({studentArray}) => {
    return (
        <>
            {
                studentArray.map((student, i) => {
                    console.log('student:', student)
                    return (
                        <Card
                        key={i}
                        name={student[i].name}
                        />
                    )
                } )

            }

        </>
    )
}

export default CardArray;