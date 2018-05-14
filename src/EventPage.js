import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class EventPageComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Eventpage</h1>
    <p>Hello from a eventpage!</p>
   </div>
  )
 }
}
const EventPage = AnimatedWrapper(EventPageComponent);
export default EventPage;
