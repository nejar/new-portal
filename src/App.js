import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CustomButton from "./components/common/CustomButton";
import Content from "./components/Content";
import MainHeader from "./components/home/MainHeader";
import MainContent from "./components/home/MainContent";
import LoginPage from "./components/form/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

const buttonClickHandle = () => {
  console.log("I am inside app.js file");
};

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <CustomButton
        handleClick={buttonClickHandle}
        btnText="Button form aap file"
      /> */}
      {/* <Content /> */}

      <Router>
        <MainHeader />
        <Route
          path="/"
          component={(props) => <MainContent myname="nejar" {...props} />}
          exact
        />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/dashboard"
          component={(props) => <Dashboard {...props} />}
        />
      </Router>
    </div>
  );
}

export default App;
