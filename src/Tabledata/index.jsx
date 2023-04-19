import React from "react";
export default function Tabledata(props) {
  return (
    <table id="table">
      {/* header part of the table */}
      <thead>
        <tr>
          <th>ID</th>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP_Address</th>
          <th>Del Data</th>
        </tr>
      </thead>
      {/* body part of the table */}
      <tbody>
        {/* data from api are arranged in table */}
        {props.Data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            {/* placing star type check box and getting function from parent */}
            <td id="fname">
              <input
                className="star"
                type="checkbox"
                onClick={() => props.onhandleStarClick(index)}
              />
              {item.first_name}
            </td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.ip_address}</td>
            <td>
              {/* this button to del specific user data */}
              <button onClick={() => props.onhandleDelClick(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
