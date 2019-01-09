import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount(){
     fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=aaron&format=json&origin=*")
     .then(res => res.json())
      .then(json =>{
        this.setState({
          isLoaded: true,
          items:json
        })
      });
  }

  render() {
    var {isLoaded, items} = this.state;

    if(!isLoaded){
      return <div> Loading ... </div>
    }else {
      return (
        <div className="App">
          <p>{items[0]}</p>
          <p>{items[1][4]}</p>
          <p>{items[3]}</p>

          <p>{items}</p>
        </div>
      );
    }
  }
}

export default App;
