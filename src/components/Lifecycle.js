import React from "react";

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {
      leadingThisReview: undefined,
    };
    console.log("this is the constructor of Lifecycle.js");
  }

  // componentWillUnmount using useEffect Hook
  // useEffect(()=>{
  //   return ()=>{
  //     console.log('this code runs on unmount')
  //   }
  // },[])

  componentDidMount() {
    console.log("this is componentDidMount in Lifecycle.js");
  }

  componentDidUpdate() {
    console.log("this is componentDidUpdate in Lifecycle.js");
  }

  componentWillUnmount() {
    console.log("this is componentWillUnmount in Lifecycle.js");
  }

  updateState = () => {
    this.setState({
      leadingThisReview: "Nitin Misra",
    });
  };

  render() {
    console.log("this is render in Lifecycle.js");
    return (
      <div>
        <div>This is the Lifecycle Component</div>
        <button onClick={this.updateState}>Update State</button>
      </div>
    );
  }
}

export default Lifecycle;
