const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const mongoose = require("mongoose");

const playersScheme = new Schema({
    name: {
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

const Players = mongoose.model("Players", playersScheme);
const Games = mongoose.model("Game", gamesSchema);

export const getPlayers = () => {
    return Players.findAll();
};

export const getGames = () => {
    return Games.findAll();
};

export const addPlayer = (name) => {
    const player = new Player({name});
    return player.save()
};

export const addGame = (player1Id, player2Id) => {
    const game = new Game({
        player1: {
            id: player1Id,

        },
        player2: {
            id: player2Id
        },
        player1Id,
        player2Id
    });
    return game.save()
};