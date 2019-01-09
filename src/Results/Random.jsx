import React, {Component} from 'react';

class Random extends Component{

  render(){
    return <button id = "rando" onClick = {this.handleSubmit}>Random Article</button>
  }

  handleSubmit(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  }
}

export default Random;
