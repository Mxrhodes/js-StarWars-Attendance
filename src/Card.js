import React from "react";
import "./Card.css";

// TODO: fill in with starwars api
const Card = (props) => {
    const { name } = props;
    return (
        <div className="front-card">
            <h3>{name}</h3>
            <button>Attendance Status</button>
        </div>
    )
}


export default Card;