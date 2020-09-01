import React from "react";
import Pic from "./pic.jpg";
import './Employee.css'

function Employee(props) {
  return (
    <div className="Employee">
      <img className="Employee__pic" src={Pic} />
      <div className="Employee__text">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Employee;
