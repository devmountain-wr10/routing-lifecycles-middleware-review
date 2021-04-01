import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log("this is main.js", this.props);
    return (
      <div>
        <div>This is the Main Component</div>
        <Link to="/lifecycle/myParam">
          <button>Go To the Lifecycle Component</button>
        </Link>
      </div>
    );
  }
}

export default Main;
