import { Component } from 'react';
import './App.css';
import CardArray from './CardArray.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      films: [],
    }
  }

  componentDidMount() {

    const peopleUrls = [
      "https://swapi.py4e.com/api/people/?page=1", 
      "https://swapi.py4e.com/api/people/?page=2", 
    ]

    const filmsUrl = "https://swapi.py4e.com/api/films";


    const fetchPeopleJSON = async function() {
      let arr = [];
      const arrayOfPromises = peopleUrls.map(url => fetch(url));
      for await (let request of arrayOfPromises) {
        let data = await request.json();
        arr.push(data.results)
      }
      updateCharacters(arr.flat());
    }

    const updateCharacters = (data) => {
      return this.setState({characters:data})
    }

    async function fetchFilmsJSON() {
      const response = await fetch(filmsUrl);
      let data = await response.json();
      updateFilms(data)
  }

  const updateFilms = (data) => {
    //console.log('film data', data.results)
    return this.setState({films:data.results})
  }

    fetchPeopleJSON();
    fetchFilmsJSON();

  }
  


  render() {
    
    const filteredStarwars = this.state.characters.filter( user => {
      // Users below were removed for less complexity
      return !user.name.includes("Wilhuff Tarkin") && !user.name.includes("Palpatine")
    })
    return ( 
      <div className="App">
        <header className="App-header">
          <h1>STARWARS CARDS</h1>
        </header>
        <main>
          <CardArray 
            characters={filteredStarwars}
            films={this.state.films}
          />
        </main>
      </div>
    )
  }
    
}

export default App;
