const {getPlayers, addPlayer} = require("../repository/repository");
const express = require('express');
const router = express.Router();

router.get('/' , async (req, res) => {
    res.send(await getPlayers());
});

router.post('/' , async (req, res) => {
    res.send(await addPlayer(name));
});

router.delete('/' , async (req, res) => {
    res.send(await (()=>{})());
});

module.exports = router;