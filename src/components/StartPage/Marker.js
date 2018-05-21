import React from "react";
import { Marker } from "react-google-maps";
import mapmarker from "./mapmarker.png";

export default class MapMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={mapmarker}
        >
        </Marker>
    );
  }
}
