import React, { useState } from "react";
export default function DisplayStarredData({ Starred }) {
  const [isStarredClicked, setIsStarredClicked] = useState(false);
// this function reperesent if the start is clicked or not
  const handleStarredClick = () => {
    setIsStarredClicked(true);
    console.log("true");
  };

  return (
    <div>
      {/* starred button */}
      <div>
        <button id="headerButtons" onClick={handleStarredClick}>
          Starred
        </button>
        {/* by using ternory operator to display data whenever it is clicked*/}
        {isStarredClicked ? (
          <div>
            <table id="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First_name</th>
                  <th>Last_name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>IP_Address</th>
                </tr>
              </thead>
              <tbody>
              {/* all the starred data is arranging in a table */}
                {Starred.map((Starred, index) => (
                  <tr key={index}>
                    <td>{Starred.id}</td>
                    <td>{Starred.first_name}</td>
                    <td>{Starred.last_name}</td>
                    <td>{Starred.email}</td>
                    <td>{Starred.gender}</td>
                    <td>{Starred.ip_address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No Data is starred</div>
        )}
      </div>
    </div>
  );
}
