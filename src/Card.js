import React from "react";
import "./Card.css";

// TODO: fill in with starwars api
const Card = (props) => {
    const { name } = props;
    return (
        <div className="attendance-box">
            <h3>{name}</h3>
            <p>Attendance Status</p>
        </div>
    )
}


export default Card;