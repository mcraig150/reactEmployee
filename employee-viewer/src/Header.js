import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value }, () => {
      this.props.callBack(this.state.search);
    });
  }

  render() {
    return (
      <div className="Header">
        <img className="Header__icom" src={Logo} alt="Logo" />

        <div className="Header__center">
          <input
            type="text"
            placeholder="Enter Name"
            onChange={this.updateSearch.bind(this)}
          />
          <div className="Header__search">
            <SearchIcon />
          </div>
        </div>

        <div className="Header__right">
          <p>John Dough</p>
          <Avatar />
        </div>
      </div>
    );
  }
}

export default Header;
