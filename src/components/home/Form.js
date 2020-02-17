import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: ""
    }
    this.handleEventInputText = this.handleEventInputText.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  }

  handleEventInputText(e) {
    this.setState({
      valueInput: e.target.value
    });
  }
  handleEventSubmit(e) {
    e.preventDefault();
    alert("Pesan Dari tag Input: " + this.state.valueInput);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleEventSubmit}>
          <input type="text" value={this.state.valueInput} onChange={this.handleEventInputText}/>
          <input type="submit" value="Submit Data" />
        </form>
      </div>
    );
  }
}
export default Form;
