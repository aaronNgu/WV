import React, {Component} from 'react';
import SearchResult from './SearchResult';
import InputForm from './InputForm';

class SearchResults extends Component{
  state = {
    input:null,
    isLoaded:false,
    items:[],
  }

  constructor(props){
    super(props);
    this.handleSearch= this.handleSearch.bind(this);
  };

  handleSearch(userInput){
    this.setState({input: userInput});
    this.goSearch();
  }

  goSearch(){
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=aaron&format=json&origin=*")
    .then(res => res.json())
     .then(json => this.handleJSON(json));
  }

  handleJSON(json){
    console.log(json);
    console.log("json.lenght", json.length);
    var parsedJSON = this.parseJSON(json);
    console.log('parsedJSON is: ',parsedJSON);
    this.setState({
      isLoaded:true,
      items: parsedJSON,
    })
  }

  parseJSON(json){
    var newJSON = [];
    for(var i = 0; i < json[1].length; i++){
      newJSON[i] = [json[2][i],json[3][i]];
    }
    return newJSON;
  }

  render(){
    console.log("render in SearchResults");
    if(!this.state.isLoaded){
      console.log("render in SR without data");
      return <InputForm
      onSearch = {(input) => this.handleSearch(input)}/>
    }else {
      console.log("render in SR with data");
      return (
        <React.Fragment>
          <InputForm
           onSearch = {(input) => this.handleSearch(input)}/>
           {this.state.items.map(item => <SearchResult key = {item} item ={item}/>)}
        </React.Fragment>
      )
    }
  }
}

export default SearchResults;
