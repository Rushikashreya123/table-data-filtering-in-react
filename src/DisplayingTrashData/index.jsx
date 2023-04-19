import React, { useState } from "react";
export default function DisplayingTrashData({ Trash }) {
  const [isTrashClicked, setIsTrashClicked] = useState(false);
  // it specify whether the del button is clicked or not
  const handleTrashClick = () => {
    setIsTrashClicked(true);
    console.log("true");
  };
  return (
    <div>
      {/* del button */}
      <div>
        <button id="headerButtons" onClick={handleTrashClick}>
          Trash
        </button>
         {/* by using ternory operator to display data whenever it is clicked*/}
        {isTrashClicked ? (
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
               {/* all the deleted data is arranging in a table */}
                {Trash.map((Trash, index) => (
                  <tr key={index}>
                    <td>{Trash.id}</td>
                    <td>{Trash.first_name}</td>
                    <td>{Trash.last_name}</td>
                    <td>{Trash.email}</td>
                    <td>{Trash.gender}</td>
                    <td>{Trash.ip_address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No Data is Deleted</div>
        )}
      </div>
    </div>
  );
}
