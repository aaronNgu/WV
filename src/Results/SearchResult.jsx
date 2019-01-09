import React, {Component} from 'react';
import './SearchResult.css'

class SearchResult extends Component{
  render(){
    console.log("render in SearchResult");
    return (
      <div className = "Result">
        <a href = {this.props.item[1]} target = "_blank">
        {this.props.item[0]}
         </a>

      </div>
    )
  }

  componentDidUpdate(){
    console.log("componentDidUpdate in SearchResult");
  }
}

export default SearchResult;
