const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect("mongodb://localhost:27017/tournament-table", { useNewUrlParser: true });

const app = express()
const port = 3020

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))