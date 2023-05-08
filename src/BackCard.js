import React from "react";
import './Card.css';

    // may have to map films to get all the films the characters are in

// Create a Films function to utilize props.children. 

//const Films= = (props)
// 
const BackCard = (props) => {

    const { name, height, mass, gender, films, all_films} = props;

    //console.log(name + ': ' + films)

    for(let f of all_films){
        debugger;
        for(let i=0; i < films.length;i++){
            //Had to take it back to the basics with these loops beacuse It would nto work
            // Just now, after looking closely, I learned that the urls are from 2 different swapi apis.
            // Now to find out why
            if(films[i] === f.url){
                console.log('hahah', f.title)
            }
        }

    }


    // USE A GRID DISPLAY FOR THE CARD DESIGN
// IN THE MEANTIME JUST SHOW ALL THE DATA

    return (
        <div className={ "card back " + name }>
            <h1 className="title">{name}</h1>
            <section className="height-gender">
                <p>Species: {gender === "n/a" ? "robot" : gender}</p>
                <p>Height: {height}</p>
                <p>Mass: {mass}</p>
                <div className="film-area">
                    <h2>Films</h2>
                    <p>{}</p>
                </div>
            </section>
            <section className="films"></section>
            <section className="starships"></section>
        </div>
    )
}

export default BackCard;