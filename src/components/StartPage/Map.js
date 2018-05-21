import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker from "./Marker";

const Mappage = withScriptjs(withGoogleMap((props) =>{

  const markers = props.doctors.map( doctor => <Marker
                    key={doctor.uid}
                    doctor={doctor}
                    location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
                  />);

  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default Mappage;
