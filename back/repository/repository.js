const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


const playersScheme = new Schema({
    fullName: {
        type: String,
        required: true
    }
});

let winCountScheme = {
    type: Number,
    required: true,
    default: 0
}

const gamesSchema = new Schema({
    startDate: Date,
    endDate: Date,
    player1: {
        id: ObjectId,
        winCount: winCountScheme
    },
    player2: {
        id: ObjectId,
        winCount: winCountScheme
    }
})

const Player = mongoose.model("Player", playersScheme);
const Game = mongoose.model("Game", gamesSchema);

const getPlayers = () => {
    return Player.find();
};
const deletePlayer = (id) => {
    return Player.deleteOne({_id: id});
};

const getGames = () => {
    return Game.find();
};

const addPlayer = (name) => {
    const player = new Player({name});
    return player.save()
};

const updatePlayer = (id, fullName) => {
    const player = Player.find({_id: id});
    player.fullName = fullName;
    return player.save()
};

const startGame  = (id) => {
    const game = Game.find({_id: id});
    game.startDate = new Date();
    return game.save()
};

const stopGame  = (id) => {
    const game = Game.find({_id: id});
    game.endDate = new Date();
    return game.save()
};

const addGame = (player1Id, player2Id) => {
    const game = new Game({
        player1: {
            id: player1Id
        },
        player2: {
            id: player2Id
        }
    });
    return game.save()
};


module.exports = {
    getPlayers,
    addPlayer,
    getGames,
    addGame,
    deletePlayer
}