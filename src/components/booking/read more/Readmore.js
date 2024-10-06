import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Readmore() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = "http://localhost:3000/customer/" + id;
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [id]);

    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0">
                <div
                    className="card-header bg-dark text-white"
                    style={{ padding: "20px" }}
                >
                    <h2 className="text-center">Customer Details</h2>
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Customer ID:</strong> <span className="ml-2">{data.cusid}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Name:</strong> <span className="ml-2">{data.customername}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Age:</strong> <span className="ml-2">{data.age}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Check-In Date:</strong> <span className="ml-2">{data.checkindate}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Check-Out Date:</strong> <span className="ml-2">{data.checkoutdate}</span>
                        </li>
                        <li className="list-group-item">
                            <strong>Room Type:</strong> <span className="ml-2">{data.roomtype}</span>
                        </li>
                    </ul>

                    <div className="mt-4 d-flex justify-content-center">
                        <Link
                            className="btn btn-outline-dark btn-lg mr-3 shadow-sm"
                            to="/booking/totalbooking"
                        >
                            Back
                        </Link>
                        <button
                            onClick={() => {
                                const apiUrl = "http://localhost:3000/customer/" + id;
                                fetch(apiUrl, { method: "DELETE" })
                                    .then(res => res.json())
                                    .then(() => {
                                        navigate("/booking/totalbooking");
                                    });
                            }}
                            className="btn btn-danger btn-lg shadow-sm"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Readmore