import React, { Component } from "react";

class ScrollBox extends Component {

  render() {
    const style = {
      border: "1px solid pink",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, blue)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />

      </div>
      
    );
  }
}
export default ScrollBox;
