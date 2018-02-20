import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios'
export default class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {campuses:[]}
   
  }

  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
    this.setState({campuses:this.props.campuses})
  }
 
  // loadMarkers(map){
  //   for (let i = 0; i < vals.length; i++) {
  //     let marker = new google.maps.Marker({
  //       position: {lat:parseFloat(vals[i].coords.lat), lng:parseFloat(vals[i].coords.lng)},
  //       map: map,
  //       description: vals[i].description,
  //       address: vals[i].address,
  //       createdBy:vals[i].createdBy,
  //       time:vals[i].time,
  //       date:vals[i].date,

  //     });
  //     marker.addListener('click', function() {
  //       let location = document.getElementById('location')
  //       location.innerHTML = marker.address
  //       let time = document.getElementById('time')
  //       time.innerHTML = marker.time
  //       let createdBy = document.getElementById('createdBy')
  //       createdBy.innerHTML = marker.createdBy
  //       let date = document.getElementById('date')
  //       date.innerHTML = marker.date
  //       let description = document.getElementById('description')
  //       description.innerHTML = marker.description
  //      });
       
  //    }
  // }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 40.7485722, lng: -74.0068633}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })
      let infowindow = new google.maps.InfoWindow({
        content: `<h1>hello</h1>`
      });

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      for (let i = 0; i < this.state.meetups.length; i++) {
            let marker = new google.maps.Marker({
              position: {lat:parseFloat(this.props.meetups[i].coords.lat), lng:parseFloat(this.props.meetups[i].coords.lng)},
              map: this.map,
              description: this.props.meetups[i].description,
              address: this.props.meetups[i].address,
              createdBy:this.props.meetups[i].createdBy,
              time:this.props.meetups[i].time,
              date:this.props.meetups[i].date,
      
            });
            // marker.addListener('click', function() {
            //   let location = document.getElementById('location')
            //   location.innerHTML = marker.address
            //   let time = document.getElementById('time')
            //   time.innerHTML = marker.time
            //   let createdBy = document.getElementById('createdBy')
            //   createdBy.innerHTML = marker.createdBy
            //   let date = document.getElementById('date')
            //   date.innerHTML = marker.date
            //   let description = document.getElementById('description')
            //   description.innerHTML = marker.description
            //  });
             
           }

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      height: '500px;' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
    <div className="container" style={style}>
    <div className="row">
      <div ref="map"  className="col s12 map">
        loading map...
      </div>
      </div>
    </div>
    )
  }
}
