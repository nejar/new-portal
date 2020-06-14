import React from "react";

function CustomButton(props) {
  return <button onClick={props.handleClick}>{props.btnText}</button>;
}

export default CustomButton;
