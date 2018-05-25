import React, { Component } from 'react';
import '../NavbarContent.css'
import './index.css'
class Search extends Component {
  render(){
    return (
      <div className="searchWrapper">
        <div className="searchIcon"></div>
        <h1 className="seachName">Search</h1>  
      </div>
    )
  }
}

export default Search;
