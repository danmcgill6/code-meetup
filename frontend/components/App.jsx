import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './Map'
class App extends Component {
  constructor(props){
    super(props)
    this.state={meetups:[]}
  }
  componentDidMount(){
    fetch('/api/meetups')
    .then((results)=>{
     return results.json()
     // return results.json()
    })
    .then((meetups)=>{
      this.setState({meetups:meetups})
    })
  }
  render() {
    return (
      <div>
       <Navbar></Navbar>
       <div className="container">
       <div className="row">
       <div className="col s3">
            <Sidebar />
        </div>
        <div className="col s9">
          <MapContainer google={this.props.google} meetups={this.state.meetups} />
        </div>
        </div>
      </div>
      </div>
    );
  }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao',
})(App)


