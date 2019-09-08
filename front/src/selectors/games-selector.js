export const getPlayersWithScores = (state) => {
    return state.players.map(p => {
        const totalWinCount = state.games.reduce((accum, game) => {
            if (p._id === game.player1._id) {
                return accum + game.player1.winCount;
            } else if (p._id === game.player2._id) {
                return accum + game.player2.winCount;
            } else {
                return accum;
            }
        }, 0);

        return {
            ...p,
            totalWinCount: totalWinCount
        }
    })
}

