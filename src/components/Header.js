import React, { Component } from "react";
import CustomButton from "./common/CustomButton";
import Multiplier from "./Multiplier";

export class Header extends Component {
  handleOnClick = () => {
    console.log("i am in header");
  };

  additionar = (x, y) => {
    console.log(x + y);
  };

  render() {
    return (
      <div>
        Header
        <CustomButton
          btnText="Header Button"
          handleClick={this.handleOnClick}
        />
        <Multiplier x={5} y={5} />
      </div>
    );
  }
}

export default Header;
