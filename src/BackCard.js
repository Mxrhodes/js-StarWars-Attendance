import React from "react";
import './Card.css';

    // may have to map films to get all the films the characters are in

// Create a Films function to utilize props.children. 

//const Films= = (props)
// 
const BackCard = (props) => {
    const { name, height, mass, gender, films } = props.selected;
    const { all_films } = props;


    let filmTitles = [];
    for(let f of all_films){
        for(let i=0; i < films.length;i++){
            if(films[i] === f.url){
                filmTitles.push(f.title)
            }
        }
    }

        const filmList = filmTitles.map((title, i) =>
            <p key={title}>
                {title}
            </p>
        );


    // USE A GRID DISPLAY FOR THE CARD DESIGN
// IN THE MEANTIME JUST SHOW ALL THE DATA

    return (
        <>
            <div className={ "back card " + name }>
                <h1 className="title">{name}</h1>
                <section className="height-gender">
                    <p>Species: {gender === "n/a" ? "robot" : gender}</p>
                    <p>Height: {height}</p>
                    <p>Mass: {mass}</p>
                    <div className="film-area">
                        <h2>Films</h2>
                        <ul>
                            {filmList}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}

export default BackCard;