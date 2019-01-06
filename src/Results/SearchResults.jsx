import React, {Component} from 'react';
import SearchResult from './SearchResult';
import InputForm from './InputForm';

class SearchResults extends Component{
  state = {
    input:null,
  }

  constructor(props){
    super(props);
    this.handleSearch= this.handleSearch.bind(this);
  };

  handleSearch(userInput){
    this.setState({input: userInput});
  }

  render(){
    return (
      <React.Fragment>
        <InputForm
         onSearch = {(input) => this.handleSearch(input)}/>
        <SearchResult />
        <SearchResult />
      </React.Fragment>
    )
  }
}

export default SearchResults;
