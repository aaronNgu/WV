import React, {Component} from 'react';
import './SearchResult.css';

class InputForm extends Component{

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputField: ''
    };
  }

  //pass input value to parent
  handleSubmit(event){
    event.preventDefault();
    this.props.onSearch(this.state.inputField);
  }

  //sets local input value
  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  render(){
    return (
      <form id = 'get-article' onSubmit = {e => this.handleSubmit(e)}>
        <input
         placeholder = "Search ..."
         value = {this.state.inputField}
         onChange = {e => this.handleChange(e)}/>
        <button id = 'submit'>Submit</button>
      </form>
    );
  }
}

export default InputForm;
