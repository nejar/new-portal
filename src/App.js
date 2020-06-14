import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/common/CustomButton";
import Content from "./components/Content";

const handleOnClick = () => {
  console.log("i am in app");
};

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
