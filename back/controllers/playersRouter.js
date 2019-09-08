const {getPlayers, addPlayer, deletePlayer} = require("../repository/repository");
const express = require('express');
const router = express.Router();

router.get('/' , async (req, res) => {
    res.send(await getPlayers());
});

router.post('/' , async (req, res) => {
    debugger
    res.send(await addPlayer(req.body.fullName));
});

router.delete('/:id' , async (req, res) => {
    res.send(await deletePlayer(req.params.id));
});

module.exports = router;