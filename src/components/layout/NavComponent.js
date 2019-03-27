import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavComponent extends Component {
  render() {
    const { dipitem } = this.props;

    if (dipitem.items) {
      return (
        <li className="dropdown nav-item">
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={dipitem.link}>{dipitem.title}</Link>
          <div className="dropdown-menu mega-menu" area-labelledby="navbarDropdown">
            <div className="row">
              <div className="col-md-3">
                {dipitem.items.map(d => (
                  <p>
                    <Link style={{ color: "#0a3370" }} to={d.link}>
                      {d.name}
                    </Link>
                    </p>
                  ))}
                
              </div>
            </div>
          </div>
        </li>

      );
    }
    return (
     <li className="nav-item">
        <Link to={dipitem.link} className="nav-link" style={{ color: "#fff" }}>
          {dipitem.title}
        </Link>
      </li>
    );
  }
}

export default NavComponent;
