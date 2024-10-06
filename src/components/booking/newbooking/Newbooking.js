import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './New.css';

function Newbooking() {
  const [data, setData] = useState({});
  const Nave = useNavigate();

  const handleSubmit = () => {
    const { cusid, customername, age, roomtype, checkindate, checkoutdate } = data;

    if (!cusid || !customername || !age || !roomtype || !checkindate || !checkoutdate) {
      alert("All fields are compulsory!");
      return;
    }

    fetch("http://localhost:3000/customer", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then(() => Nave('/booking/totalbooking'));
  };

  return (
    <div className="form-container" >
      <h2>Customer Detail Form</h2>
      <table className="table">
        <tbody>
          <tr className="form-row">
            <td><h5>Customer ID:</h5></td>
            <td><input type="text" required onChange={(e) => setData({ ...data, cusid: parseInt(e.target.value) })} /></td>
          </tr>
          <tr className="form-row">
            <td><h5>Customer Name:</h5></td>
            <td><input type="text" onChange={(e) => setData({ ...data, customername: e.target.value })} /></td>
          </tr>
          <tr className="form-row">
            <td><h5>Age:</h5></td>
            <td><input type="text" onChange={(e) => setData({ ...data, age: e.target.value })} /></td>
          </tr>
          <tr className="form-row">
            <td><h5>Room Type:</h5></td>
            <td>
              <select onChange={(e) => setData({ ...data, roomtype: e.target.value })}>
                <option value="deluxe">Deluxe</option>
                <option value="non-deluxe">Non-Deluxe</option>
                <option value="5-star">5-Star</option>
              </select>
            </td>
          </tr>
          <tr className="form-row">
            <td><h5>Check-in Date:</h5></td>
            <td><input type="date" onChange={(e) => setData({ ...data, checkindate: e.target.value })} /></td>
          </tr>
          <tr className="form-row">
            <td><h5>Check-out Date:</h5></td>
            <td><input type="date" onChange={(e) => setData({ ...data, checkoutdate: e.target.value })} /></td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-danger" onClick={() => Nave('/')}>Back</button>
            </td>
            <td>
              <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Newbooking;
