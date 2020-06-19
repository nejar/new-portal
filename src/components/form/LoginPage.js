import React, { Component } from "react";
// import "../assets/Custom.css";
import "../assets/Custom.scss";

const customStyle = {
  container: { color: "red", fontSize: "20px" },
  btn: { color: "blue" },
};

export class LoginPage extends Component {
  state = {
    username: null,
    password: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.username.value);
    // if (e.target.username.value && e.target.password.value) {
    //   this.setState({
    //     username: e.target.username.value,
    //     password: e.target.password.value,
    //   });
    // }
    //console.log(this.state); give null bcoz not properly updated

    console.log(this.state);
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleWithRefs = () => {
    console.log(this.refs.username.value);
    this.setState({
      username: this.refs.username.value,
      password: this.refs.password.value,
    });
  };

  // handleOnChangePassword = (e) => {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // };

  render() {
    // console.log(this.state);
    return (
      <div className="jumbotron">
        <h2 style={customStyle.container}>Login Page</h2>
        <br />
        <form>
          <input
            type="text"
            placeholder="usename"
            ref="username"
            onChange={this.handleWithRefs}
            style={{ borderRadius: "10px" }}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            ref="password"
            onChange={this.handleWithRefs}
            style={{ borderRadius: "10px" }}
          />
          <br />
          <br />
          <button className="login-btn" onClick={this.handleSubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
