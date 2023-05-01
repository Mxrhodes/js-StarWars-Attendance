import { Component } from 'react';
import './App.css';
import CardArray from './CardArray.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {

    const urls = [
      "https://swapi.py4e.com/api/people/?page=1", 
      "https://swapi.py4e.com/api/people/?page=2", 
      // "https://swapi.py4e.com/api/people/?page=3"
    ]

    const getData = async function() {
      let arr = [];
      const arrayOfPromises = urls.map(url => fetch(url));
      for await (let request of arrayOfPromises) {
        let data = await request.json();
        arr.push(data.results)
      }
      updateCharacters(arr.flat());
    }

    const updateCharacters = (data) => {
      return this.setState({characters:data})
    }

    getData();

  }
  


  render() {
    
    const filteredStarwars = this.state.characters.filter( user => {
      return !user.name.includes("Wilhuff Tarkin") && !user.name.includes("Palpatine")
    })
    return ( 
      <div className="App">
        <header className="App-header">
          <h1><img src='https://en.wikipedia.org/wiki/File:Star_Wars_Logo.svg' alt='Starwars Logo'></img> </h1>
        </header>
        <main>
          <div className='card-container'>
            <CardArray characters={filteredStarwars}/>
          </div>
        </main>
      </div>
    )
  }
    
}

export default App;
