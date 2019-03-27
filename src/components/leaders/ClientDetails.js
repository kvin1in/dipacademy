import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';


class ClientDetails extends Component {
 

 

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { client } = this.props;
    

    if (client) {
      return (
        <div>
          <div className="row" style={{border: "1px solid grey", maxWidth:1600, margin:"0 auto"}}>
            <div className="col-md-6">
              <Link to="/about/leaders" className="btn btn-link">
                <i className="fas fa-arrow-circle-left" /> Вернуться
              </Link>
            </div>
            <div className="col-md-6">
              <div className="btn-group float-right">
               
              </div>
            </div>
          </div>
          

          <div>
            <div className="bio_img_cont" style={{backgroundImage: 'url("/asserts/forSite.png")', backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>              
            </div>
            <div className="person__photo">
              <figure className="person__img">
                <img src={client.image} width="100%"></img>
              </figure>
            </div>
            <div className="person__data">
              <div className="person__name">
                {client.name}
              </div>
              <span className="person__post">{client.title}</span>
            </div>
             
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    { collection: 'leaders', storeAs: 'client', doc: props.match.params.id }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0]
  }))
)(ClientDetails);
