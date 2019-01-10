import React, {Component} from 'react';
import SearchResult from './SearchResult';
import InputForm from './InputForm';
import Random from './Random';

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
  }

  componentDidUpdate(){
    fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search="+this.state.input+"&format=json&origin=*")
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
    if(!this.state.isLoaded){
      return (
        <div id = 'main'>
            <h1>Search it up </h1>
            <div id = "get-article" >
              <Random />
              <p id = 'or'> OR </p>
              <InputForm
                onSearch = {(input) => this.handleSearch(input)}/>
            </div>
        </div>
      )

    }else {
      return (
        <div id = 'main' style = {{height:'auto'}}>
            <h1>Search it up </h1>
            <div id = "get-article" >
              <Random />
              <p id = 'or'> OR </p>
              <InputForm
               onSearch = {(input) => this.handleSearch(input)}/>
            </div>
            <div id = "output">
             {this.state.items.map(item => <SearchResult key = {item} item ={item}/>)}
             </div>
        </div>
      )
    }
  }
}

export default SearchResults;
