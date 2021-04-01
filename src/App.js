import "./App.css";
import routes from "./Routes";
import { withRouter } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log("this is the constructor on App.js");
  }
  componentDidMount() {
    console.log("this is componentDidMount on App.js");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    console.log("this is componentDidUpdate in App.js");
  }

  componentWillUnmount() {
    alert("this is componentWillUnmount in App.js");
  }

  render() {
    console.log("this is render in App.js");
    return <div className="App">{routes}</div>;
  }
}
export default withRouter(App);
