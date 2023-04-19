import { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {

    const urls = [
      "https://swapi.py4e.com/api/people/?page=1", 
      "https://swapi.py4e.com/api/people/?page=2", 
      "https://swapi.py4e.com/api/people/?page=3"
    ]

    const getData = async function() {
      const allUrls = urls.map(url => fetch(url))
      try {
        for await (let response of allUrls) {
          const data = await response.json()
          console.log("data", data.flat())
          this.setState({students:data.flat()})
        }
      } catch (err) {
        console.log("Promise Error -- ", err)
      }
    }

    getData();

  }


  render() {
   
    return ( 
      <div className="App">
        <header className="App-header">
          <h1>Starwars Attendance</h1>
        </header>
    
      <main>
        <Card characters={this.students}/>
      </main>

      </div>
    )
  }
    
}

export default App;
