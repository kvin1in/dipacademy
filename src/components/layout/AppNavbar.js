import React, { Component } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";
import NavComponent from "./NavComponent";

class Navigatebar extends Component {
  constructor() {
    super();
    this.state = {
      dipmenu: [
        {
          title: "Об Академии",
          link: "/about",
          items: [
                     {
                      name: "Руководство",
                       link: "/about/leaders"
                    },
                    {
                      name: "Структура",
                      link: "/struct"
                    },
                    {
                      name: "Академия сегодня",
                      link: "/academy_today"
                    },
                    {
                      name: "Пресс-центр",
                      link: "/press"
                    },
          ]
        },
        {
          title: "Учеба",
          link: "/about"
        },
        {
          title: "Наука",
          link: "/about"
        },
        {
          title: "Пресс-служба",
          link: "/about"
        }
      ]
    };
  }

  render() {
    const { dipmenu } = this.state;
    return (
      <div className="container-fluid" style={{ background: "#071B39", borderBottom: "1px solid #B38E11" }}>
        <ul className="nav" style={{ paddingLeft: 32 }}>
          {dipmenu.map(dipitem => (
            <NavComponent key={dipitem.id} dipitem={dipitem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Navigatebar;
