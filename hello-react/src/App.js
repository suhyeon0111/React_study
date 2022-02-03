import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundery from "./ErrorBoundery";

// 렌덤 색상 생성 함수
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> 랜덤색상 </button>
        <ErrorBoundery>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundery>
      </div>
    );
  }
}
export default App;
