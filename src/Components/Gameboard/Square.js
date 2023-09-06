import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./Square.css";

const Square = () => {
  const [move, setMove] = useState();
  const clickHandler = () => {
    if (move === "X") {
      setMove("O");
    } else {
      setMove("X");
    }
  };

  return (
    <div className="Square" onClick={clickHandler}>
      <button id="Square" onClick={clickHandler}>
        {move}
      </button>
    </div>
  );
};

export default Square;
