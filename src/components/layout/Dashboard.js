import React from "react";
import Clients from "../leaders/Clients";
import Sidebar from "../layout/Sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default () => {
  return (
    <div className="container-fluid" style={{padding: "0 20px"}}>
      
          <nav aria-label="breadcrumb" className="mt-3" style={{ backgroundColor: "#0A3370", margin:"0 20px" }} >
            <ol class="breadcrumb">
            <Link to="/" class="breadcrumb-item">Главная</Link>
            <Link to="/about" class="breadcrumb-item">Об Дипломатической академии</Link>
            <Link to="/about/leaders" class="breadcrumb-item active" aria-current="page">Ректорат</Link>
            </ol>
          </nav>
          <Clients />
        
    </div>
  );
};
