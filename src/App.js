import { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  // componentDidMount() {
  //   fetch('https://swapi.py4e.com/api/people/')
  //     .then(response => response.json())
  //     .then(people => this.setState({ characters:people }))
  //     console.log("people" + this.state.characters)
  // }

  render() {
    
    return ( 
    <div className="App">
      <header className="App-header">
        <h1>Starwars Attendance</h1>
      </header>
    
    <main>
      <Card />
    </main>

    </div>
  )
  }
    
}

export default App;
