import { Component } from 'react';
import './App.css';
import CardArray from './CardArray.js';

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
      let arr = [];
      const arrayOfPromises = urls.map(url => fetch(url));
      for await (let request of arrayOfPromises) {
        let data = await request.json();
        arr.push(data.results)
      }
      updateStudents(arr.flat());
    }

    const updateStudents = (data) => {
      return this.setState({students:data})
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
        <CardArray students={this.state.students}/>
      </main>

      </div>
    )
  }
    
}

export default App;
