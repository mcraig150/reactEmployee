import React from "react";
import "./Employees.css";
import Employee from "./Employee";
import { Button } from "@material-ui/core";

class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      role: "managers",
    };
  }

  handleClick = (event) => {
    this.setState({ role: event.target.innerText });
  };

  render() {
    let filter = this.props.workers.filter((worker) => {
      return (
        worker.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==
        -1
      );
    });

    let roleFilter = filter.filter((worker) => {
        if(this.state.role.toLocaleLowerCase() !== 'all') {
            return (
                worker.job
                  .toLowerCase()
                  .indexOf(
                    this.state.role
                      .toLowerCase()
                      .substring(0, this.state.role.length - 1)
                  ) !== -1
              );
        }
        else {
           return(worker)
        }
    });
    console.log(roleFilter);
    return (
      <div className="employees">
        <div className="buttons">
          <Button variant="outlined" onClick={this.handleClick}>
            All
          </Button>
          <Button variant="outlined" onClick={this.handleClick}>
            Managers
          </Button>
          <Button variant="outlined" onClick={this.handleClick}>
            Engineers
          </Button>
          <Button variant="outlined" onClick={this.handleClick}>
            Interns
          </Button>
        </div>

        <div className="employees">
          {roleFilter.map((emp) => (
            <Employee emp={emp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Employees;
