import React from "react";

import "./Squere.css";

const Squere = (props) => {
  return (
    <div className="area">
      <button className="squere" onClick={props.onClick}>
        {props.Squere}
      </button>
    </div>
  );
};

export default Squere;
