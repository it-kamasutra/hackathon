const {getGames, addGame} = require("../repository/repository");
const express = require('express');
const router = express.Router();

router.get('/' , async (req, res) => {
    res.send(await getGames());
});

router.post('/' , async (req, res) => {
    res.send(await addGame(name));
});

router.delete('/' , async (req, res) => {
    res.send(await (()=>{})());
});

module.exports = router;