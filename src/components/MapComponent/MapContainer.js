/* global google */
import React, { Component } from "react"
import './index.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// const MyMapComponent = compose(
//
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={12}
//     defaultCenter={{ lat: 57.708870, lng: 11.974560 }}
//   >
//     {props.isMarkerShown && <Marker
//       position={{ lat: 57.706001, lng: 11.936399}}
//       onClick={props.onMarkerClick}>
//
//     <InfoBox style={{height:'10px',width:'10px', backgroundColor:'black'}}>
//       <div>
//         hej
//       </div>
//    </InfoBox>
//
//   </Marker>
//
// }
//   </GoogleMap>
// )


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ...props
  }
}

  render() {
    return (

          <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 57.708870, lng: 11.974560 }}
          >
             <Marker
                position={{ lat: 57.706001, lng: 11.936399}}>

                <InfoBox style={{padding: '0px'}}
                  options={{ closeBoxURL: ``, enableEventPropagation: true, alignBottom: true, pixelOffset: new google.maps.Size(-5, -25)}}

                  >
                    <div className="InfoBoxInner">
                      <p className="InfoBoxInnerText">Klicka här för att välja din position</p>
                    </div>
               </InfoBox>
            </Marker>



          </GoogleMap>
    )
  }
}
export default withScriptjs(withGoogleMap(MapContainer))
