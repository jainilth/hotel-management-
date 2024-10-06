const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Customer = require('./Customer')
const cors = require('cors');
const connectString = 'mongodb+srv://jainil2005:jainil%40123@cluster0.xljjhq6.mongodb.net/hotel_management';
mongoose.connect(connectString).then(() => {
    const app = express()
    app.use(bodyParser.json())
    app.use(cors());
    app.get('/customer', async (req, res) => {
        const data = await Customer.find();
        res.send(data)
    })
    app.get('/customer/:cusid', async (req, res) => {
        const data = await Customer.findOne({ cusid: req.params.cusid })
        res.send(data)
    })
    app.post('/customer', async (req, res) => {
        const Cus = new Customer({ ...req.body })
        const ans = await Cus.save()
        res.send(ans)
    })
    app.delete('/customer/:cusid', async (req, res) => {
        const data = await Customer.deleteOne({ cusid: req.params.cusid })
        res.send(data)
    })
    app.put('/customer/:cusid', async (req, res) => {
        const updatedCus = await Customer.findOneAndUpdate({ cusid: req.params.cusid }, req.body);
        res.send({ success: true, message: "updated successfully", error: null });
    })
    // app.patch('/Customer/:cusid', async (req, res) => {
    //     let Cus = await Customer.findOne({ cusid: req.params.cusid })
    //     Object.assign(Cus,req.body)
    //     const ans = await Cus.save()
    //     res.send(ans)
    //  })
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    })
    console.log("your sever is now connected with database")
}).catch(err => {
    console.error("An error occured")
})
