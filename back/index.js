const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userScheme = new Schema({
    name: {
        type: String,
        required: true
    }
});

const gameSchema = new Schema({
    id: ObjectId,
    startDate: Date,
    endDate: Date,
    player1: {
        id: ObjectId,
        winCount: Number
    },
    player2: {
        id: ObjectId,
        winCount: Number
    }
})

mongoose.connect("mongodb://localhost:27017/tournament-table", { useNewUrlParser: true });

const User = mongoose.model("User", userScheme);
const Games = mongoose.model("Game", gameSchema)

const app = express()
const port = 3020

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))