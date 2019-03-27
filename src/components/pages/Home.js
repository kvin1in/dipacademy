import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () => {
  return (
    <div className="container-fluid wrapper" style={{padding:"24px 15px 52px", maxWidth:"1600px"}}>
        <div className="row">
            <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">@</span>
            </div>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        </div>

        <div className="col-xs-12 col-sm-8 col-md-6">
            <h2><Link to="/news" style={{color:"#000"}}>Новости</Link></h2>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-3">
            
        </div>
        <div className="col-xs-12 col-md-3">
            
        </div>
    </div>
  )
}
