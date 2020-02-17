import React, { Component } from 'react';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "Nilai Input"
    }
    this.handleEventInput = this.handleEventInput.bind(this);
    this.handleEventInputWhenClick = this.handleEventInputWhenClick.bind(this);
    this.Focus = React.createRef();
  }

  handleEventInput(e) {
    this.setState({
      valueInput: e.target.value
    })
  }
  handleEventInputWhenClick() {
    this.setState({
      valueInput: ""
    })
    this.Focus.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.valueInput} onChange={this.handleEventInput} ref={this.Focus}/>
        <button onClick={this.handleEventInputWhenClick}>Submit</button>
      </div>
    );
  }
}
export default CustomInput;
