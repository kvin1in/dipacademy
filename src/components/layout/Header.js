import React from "react";

import NavigateBar from "./AppNavbar";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../logo_da.svg";

const Header = props => {
  const { classes } = props;
  return (
    <header>
      <nav className="nv">
        
          <style type="text/css">
            {`
              .nv{
                  background: #0A3370;
                  padding-left: 17px;
                  border-bottom: 1px solid #B38E11;
                  
              }

              `}
          </style>
          <a href="/" className="navbar-brand">
              <img src={logo}  
                width="100%"
                height="150"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"></img>
          </a>
        
        </nav>

        
      
 
      <NavigateBar /> 
    </header>
  );
};

export default Header;
