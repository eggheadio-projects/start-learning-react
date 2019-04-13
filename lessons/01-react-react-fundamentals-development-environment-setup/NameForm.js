import React, { Component } from "react";

class NameForm extends Component {
  state = {
    name: ""
  };

  inputChange = e => {
    this.setState({
      name: e.target.value.replace("*", "")
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <form>
          <label htmlFor="title">Title :</label>
          <input
            id="title"
            value={this.state.name}
            type="text"
            onChange={this.inputChange}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default NameForm;
