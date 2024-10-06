const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    {
        age: Number,
        checkindate: String,
        checkoutdate: String,
        cusid: Number,
        customername: String,
        roomtype: String
    },
    { collection: 'Customers' }
)
const Customer = mongoose.model('Customer', schema);
module.exports = Customer