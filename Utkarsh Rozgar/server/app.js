const dotenv = require('dotenv');
const express = require('express');
const app = express();

app.use(express.json())

// ENV
dotenv.config({ path: './config.env' });

// configuring port 
const port = process.env.PORT || 5000;

// configuring database
require('./Database/connection');
// Your code

    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })

// Your code


// routers
app.use(require('./router/router'));



app.listen(port, () => console.log(`The server is live at PORT :${port}`));