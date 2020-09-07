import React from "react";
import "./Employees.css";
import Employee from "./Employee";

class Employees extends React.Component {
  render() {
    let filter = this.props.workers.filter((worker) => {
      return (
        worker.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <div className="employees">
        {filter.map((emp) => (
          <Employee emp={emp} />
        ))}
      </div>
    );
  }
}

export default Employees;
