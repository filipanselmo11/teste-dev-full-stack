const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');


const app = express();

var corsOptions = {
    origin: " http://localhost:4200",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(3333);