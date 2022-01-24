import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState();
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        blue
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        yellow
      </button>
    </div>
  );
};

export default Say;
