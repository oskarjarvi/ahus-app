import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapContainer from './MapContainer';
import '../Main/index.css';


class Map extends Component {

  render(){
    return(
<div className="mapContainer">
  <MapContainer
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxbdQtWm6kNusSya1xA1MjEF_wBZrGiI8"
    loadingElement={<div style={{ height: '100%', width: '100%' }} />}
    containerElement={<div style={{ width: `100%`, height: `100%` }} />}
    mapElement={
      <div style={{ height: `100%` }} />
    }
    />

  </div>
    )
  }
}


export default Map;
