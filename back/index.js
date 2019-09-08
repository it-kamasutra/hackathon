const mongoose = require("mongoose");
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const playersRouter = require('./controllers/playersRouter');

mongoose.connect("mongodb://localhost:27017/tournament-table", { useNewUrlParser: true });

const app = express()
const port = 3020

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/players', playersRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))