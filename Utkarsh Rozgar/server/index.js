const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// ENV
dotenv.config({ path: './config.env' });

// configuring port 
const port = process.env.PORT || 5000;

// configuring database
require('./Database/connection');



// routers
app.use(require('./router/router'));



app.listen(port, () => console.log(`The server is live at PORT :${port}`));