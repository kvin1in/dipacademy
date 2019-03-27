import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Spinner from "../layout/Spinner";

class Clients extends Component {
  render() {
    const { leaders } = this.props;

    if (leaders) {
      return (
        <div className="container-fluid" style={{padding: "0 150px"}}>
          
            <div className="row  border rounded overflow-hidden  mb-4 shadow-sm h-md-250">
                {leaders.map(client => (
                  
                  <Link className="media"  style={{width:"100%", borderBottom:"1px solid grey", color:"#000"}}
                  to={`/leaders/${client.id}`} > 
                    <div className="media"> 
                        <img
                          style={{ padding: 0 }}
                          width={280}
                          height={250}
                          className="col-auto d-none d-lg-block"
                          src={client.image}
                          alt="Generic placeholder"
                        />
                      </div>
                    
                        <div className="col p-4 d-flex flex-column position-static">
                          <h5>{client.name}</h5>
                          <h6>{client.title}</h6>
                          
                           
                         
                       </div>               
                    
         
                 </Link>
                ))}
</div>
             
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  leaders: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "leaders" }]),
  connect((state, props) => ({
    leaders: state.firestore.ordered.leaders
  }))
)(Clients);
