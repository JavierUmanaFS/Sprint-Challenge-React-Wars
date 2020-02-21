import React from "react";
import { Nav, NavItem, NavLink, Badge } from "reactstrap";
//import styled from "styled";
import "./header.css";

function Header() {
  return (
    <div className="App">
      <h1 className="Header">
        <Badge>React Wars</Badge>
      </h1>
    </div>
  );
}

export default Header;
