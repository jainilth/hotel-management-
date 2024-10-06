import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const apiUrl = "http://localhost:3000/customer/" + id;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
    }, [id])

    const handleEdit = () => {
        const apiUrl = "http://localhost:3000/customer/" + id;

        fetch(apiUrl, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                navigate("/booking/totalbooking")
            });
    };

    return (
        <div className="form-container">
            <h2>Customer Detail Form</h2>
            <table className="table">
                <tbody>
                    <tr className="form-row">
                        <td><h5>Customer ID:</h5></td>
                        <td>
                            <input
                                value={data.cusid || ""}
                                type="text"
                                required
                                onChange={(e) => setData({ ...data, cusid: parseInt(e.target.value) })}
                            />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td><h5>Customer Name:</h5></td>
                        <td>
                            <input
                                value={data.customername || ""}
                                type="text"
                                onChange={(e) => setData({ ...data, customername: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td><h5>Age:</h5></td>
                        <td>
                            <input
                                value={data.age || ""}
                                type="text"
                                onChange={(e) => setData({ ...data, age: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td><h5>Room Type:</h5></td>
                        <td>
                            <select
                                value={data.roomtype || ""}
                                onChange={(e) => setData({ ...data, roomtype: e.target.value })}
                            >
                                <option value="deluxe">Deluxe</option>
                                <option value="non-deluxe">Non-Deluxe</option>
                                <option value="5-star">5-Star</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td><h5>Check-in Date:</h5></td>
                        <td>
                            <input
                                value={data.checkindate || ""}
                                type="date"
                                onChange={(e) => setData({ ...data, checkindate: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr className="form-row">
                        <td><h5>Check-out Date:</h5></td>
                        <td>
                            <input
                                value={data.checkoutdate || ""}
                                type="date"
                                onChange={(e) => setData({ ...data, checkoutdate: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn btn-danger" onClick={() => navigate('/booking/totalbooking')}>Back</button>
                        </td>
                        <td>
                            <button onClick={handleEdit} className="btn btn-primary">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Edit