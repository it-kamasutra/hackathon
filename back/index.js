const mongoose = require("mongoose");
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const playersRouter = require('./controllers/playersRouter');
const gamesRouter = require('./controllers/gamesRouter');

mongoose.connect("mongodb://localhost:27017/tournament-table", { useNewUrlParser: true });

const app = express()
const port = 3020

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/players', playersRouter);
app.use('/games', gamesRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))