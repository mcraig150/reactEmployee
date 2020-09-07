import React from "react";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";

let workers = [
  { id: 1, name: "Matt", email: "mcraig150@gmail.com", job: "Manager" },
  { id: 2, name: "James", email: "mcraig150@gmail.com", job: "Intern" },
  { id: 3, name: "Monty", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 4, name: "Alex", email: "mcraig150@gmail.com", job: "Intern" },
  { id: 5, name: "Ben", email: "mcraig150@gmail.com", job: "Intern" },
  { id: 6, name: "Kirk", email: "mcraig150@gmail.com", job: "Manager" },
  { id: 7, name: "Joe", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 8, name: "Laura", email: "mcraig150@gmail.com", job: "Manager" },
  { id: 9, name: "Amanda", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 10, name: "Sam", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 11, name: "Justin", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 12, name: "Cheney", email: "mcraig150@gmail.com", job: "Intern" },
  { id: 13, name: "Larry", email: "mcraig150@gmail.com", job: "Manager" },
  { id: 14, name: "Luis", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 15, name: "Micheal", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 16, name: "Rebecca", email: "mcraig150@gmail.com", job: "Engineer" },
  { id: 17, name: "Sarah", email: "mcraig150@gmail.com", job: "Manager" },
  { id: 18, name: "Alexis", email: "mcraig150@gmail.com", job: "Intern" },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  search = (data) => {
    this.setState({ search: data });
  };

  render() {
    return (
      <div className="app">
        <Header callBack={this.search} />
        <Employees workers={workers} search={this.state.search} />
        <Footer />
      </div>
    );
  }
}

export default App;
