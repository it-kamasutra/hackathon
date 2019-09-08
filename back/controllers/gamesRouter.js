const {getGames, addGame} = require("../repository/repository");
const express = require('express');
const router = express.Router();

router.get('/' , async (req, res) => {
    res.send(await getGames());
});

router.post('/' , async (req, res) => {
    console.log('xx\n', req);
    res.send(await addGame(req.body.fullName));
});

router.delete('/' , async (req, res) => {
    res.send(await (()=>{})());
});

module.exports = router;