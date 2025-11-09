const url = require('./connection/constants');
const server_port = require('./connection/constants');
const client_port = require('./connection/constants');
const mongoose = require('mongoose')
const userRoutes = require('../server/routes/userRoute');
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors({ origin: client_port , credentials: true}));
app.use(express.json());

// routes
app.use('/api/user', userRoutes)

mongoose.connect('mongodb:' + url.databaseURL)
    .then(() => {
      app.listen(server_port.server_PORT, () => {
        console.log('connected to Database and listening on port',server_port.server_PORT)
      })
    })
    .catch((error) => {
       console.log(error);
    });