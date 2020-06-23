import React, { Component } from "react";

export class LoginPage extends Component {
  state = {
    username: null,
    password: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    if (e.target.username.value && e.target.password.value) {
      this.setState({
        username: e.target.username.value,
        password: e.target.password.value,
      });
    }
    //console.log(this.state); give null bcoz not properly updated
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleWithRefs = () => {
    this.setState({
      username: this.refs.username,
    });
  };

  // handleOnChangePassword = (e) => {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // };

  render() {
    console.log(this.state);
    return (
      <div className="jumbotron">
        Login Page
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="usename"
            name="username"
            onChange={(e) => this.handleOnChange(e)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => this.handleOnChange(e)}
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
