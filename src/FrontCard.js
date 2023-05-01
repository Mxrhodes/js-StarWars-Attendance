import React from "react";
import "./Card.css";
import ImageObject from "./ImageObject";

// TODO: fill in with starwars api


const FrontCard = (props) => {
    const { name } = props;
    let baseUrl = ImageObject[name][0];
    let position = ImageObject[name][1];

    return (
        <div className={"front-card " + name } style={{ backgroundImage: `url(${baseUrl})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: position
         }}>
            <h3>{name}</h3>
        </div>
    )
}


export default FrontCard;