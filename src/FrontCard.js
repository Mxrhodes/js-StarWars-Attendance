import React from "react";
import "./Card.css";
import ImageObject from "./ImageObject";

// change the layout of the website. We are going to have the front cards
// appear in a div spaning the bottom of the view height. 
// we will use a div with an id showing a card that will populate with the backcard 
// info when we click on a picture.
// remove the name attribute from the Front card so people can learn about them.

const FrontCard = (props) => {

    const { name, handleClick} = props;
 

    let baseUrl = ImageObject[name][0];
    let position = ImageObject[name][1];

    return (
        <>
            <div onClick={handleClick} className={"front card "} style={{ 
                                        backgroundImage: `url(${baseUrl})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: position,   }}>
            </div>
        </>
    )
}


export default FrontCard;