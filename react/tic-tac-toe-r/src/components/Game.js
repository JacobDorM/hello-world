import React, { useState } from "react";
import Board from "./Board";

import "./Board.css";

const Game = () => {
  const [squeres, setSqueres] = useState(Array(9).fill(null));

  const onClickHandler = () => {
    setSqueres('x')
    console.log(squeres);
  }

  return <Board squeres={squeres} onClick={onClickHandler}/>;
};

export default Game;
