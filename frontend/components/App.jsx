import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import AddMeetup from './AddMeetup'

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './Map'
export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
    <div>
     <Router>
     <div id="main" className="container">
     <div className="row">
     <Navbar />
     <div className="col s3">
     <Sidebar /> 
     </div>
     <div className="col s9">
       <Route exact path="/" component={Home} />
       <Route path="/addmeetup" component={AddMeetup} />
     </div>
     </div>
     </div>
   </Router>
  </div>
    )
  }
}



