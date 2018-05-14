import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class ErrorReportComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>ErrorReport</h1>
    <p>Hello from the error report page!</p>
   </div>
  )
 }
}
const ErrorReport = AnimatedWrapper(ErrorReportComponent);
export default ErrorReport;
