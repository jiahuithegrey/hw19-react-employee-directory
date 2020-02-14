import React from "react";
import "./style.css";

function AddBtn(props) {
  return (
    <span className="btn add-btn" {...props} role="button" tableIndex="0">
      Add Employee
    </span>
  );
}

export default AddBtn;