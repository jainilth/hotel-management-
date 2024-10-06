import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Totalbooking() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const apiUrl = 'http://localhost:3000/customer';
        fetch(apiUrl).then(res => res.json()).then(res => setData(res));
    }, []);

    const formattedCustomers = data.map((cus) => {
        return (
            <tr key={cus.cusid}>
                <td>{cus.cusid}</td>
                <td>{cus.customername}</td>
                <td>{cus.age}</td>
                <td>{cus.checkindate}</td>
                <td>{cus.checkoutdate}</td>
                <td>{cus.roomtype}</td>
                <td>
                    <Link className="btn btn-info btn-sm" to={"/booking/" + cus.cusid}>Read More</Link>
                </td>
                <td>
                    <Link className="btn btn-warning btn-sm" to={"/booking/edit/" + cus.cusid}>Edit</Link>
                </td>
            </tr>
        );
    });

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Customer Bookings</h2>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Age</th>
                            <th>Check-In Date</th>
                            <th>Check-Out Date</th>
                            <th>Room Type</th>
                            <th>Actions</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formattedCustomers}
                    </tbody>
                </table>
                <div className="mt-4">
                    <Link to="/newbooking" className="btn btn-primary">Add Customer</Link>
                </div>
            </div>
        </>
    );
}


export default Totalbooking