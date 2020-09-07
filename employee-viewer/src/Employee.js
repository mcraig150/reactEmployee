import React from "react";
import Pic from "./pic.jpg";
import "./Employee.css";

class Employee extends React.Component {
  render() {
    return (
      <div className="Employee">
        <img className="Employee__pic" src={Pic} />
        <div className="Employee__text">
          <h2>{this.props.emp.name}</h2>
          <p>{this.props.emp.job}</p>
        </div>
      </div>
    );
  }
}

export default Employee;
