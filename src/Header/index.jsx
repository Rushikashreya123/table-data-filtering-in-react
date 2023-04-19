import sicon from "../images/Search.svg";
import React from "react";
export default function Header(props) {

    
  return (
    <div className="header">
      <div>
        <h1>User Data</h1>
      </div>
      <div id="buttons">
        <div>
          <button id="headerButtons"onClick={props.handleHomeClick} ref={props.topRef}>Home</button>
        </div>
        <div id="headerRight">
            {/* search input field */}
          <div className="headersearchbar">
            <img src={sicon} alt="searchIcon" id="searchIcon" />
            <input
              type="text"
              placeholder="search for data..."
              onChange={props.onSearchTextChange} id="input"/>
          </div>
          {/* drop down */}
          <select
            name="gender"
            id="dropDown"
            value={props.gender}
            onChange={(e) => props.onhandleSelector(e)}
            defaultValue="all">
            <option value="All" selected>
              ALL
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}
