const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

var cors = require('cors');
var bodyParser = require('body-parser');

//Importing routes
const personalDetailsRouter = require('./routes/PersonalDetailsRoutes');
const addressDetailsRouter = require('./routes/AddressDetailsRoutes');
const cartDetailsRouter = require('./routes/CartPageRoutes');

//mongoose
const mongoose = require('mongoose');

//DB url
var dbURL = "mongodb+srv://sasikala:sasiS123@cluster0.a0ubm.mongodb.net/CartAndShipping?retryWrites=true&w=majority";

//Mongodb Connection
const connectDB = mongoose.connect(dbURL,{useNewUrlParser: true})
.then((result) => {
    console.log('DB connected');
})
.catch((err) => console.log(err));


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/personalDetails', personalDetailsRouter);
app.use('/addressDetails', addressDetailsRouter);
app.use('/cartData', cartDetailsRouter);

app.use(express.static(path.join(__dirname,"./frontend/build")));

app.get("*", function(req,res) {
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});

app.listen(port,() => {
    console.log(`Express listening on port ${port}!`)
});