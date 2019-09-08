const {addUser, getUsers} = require("./repository");
const express = require('express');
const users = require('./users-router');
const cors = require('cors');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');
console.log("MONGODB_URI: ", process.env.MONGODB_URI);
//mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
mongoose.connect("mongodb://localhost/users", {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});




// создали express app
const app = express();

// настраиваем его
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send("tasks");
});
// в конец добавляем перехватчик (midleware)
app.use((req, res) => {
    res.send(404);
})

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});





