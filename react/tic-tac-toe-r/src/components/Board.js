import React from "react";
import Squere from "./Squere";

import "./Squere.css";

const Board = (props) => {
  return (
    <div className="board">
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
      <Squere squeres={props.squeres} onClick={props.onClick} />
    </div>
  );
};

export default Board;
