const express = require('express');
const app = express();
const ErrorHandler = require('./middlewares/error')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
// const user = require('./routes/user')
const cors = require("cors");
const dotenv = require("dotenv").config()


// Register middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static("uploads"));
app.use(cookieParser());

// CORS
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));

//Get PORT from config.
if(process.env !== 'PRODUCTION'){
    require('dotenv').config({
        path:"/configs/.env"
    })
}

app.use("/test", (req, res) => {
    res.send("Welcome To Buuk-me-now!");
  });

// Import Routes
// app.use("/api/v1/user", user)


// Error Handling
app.use(ErrorHandler)
module.exports = app