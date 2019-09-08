export const getPlayersWithScores = (state) => {
    return state.players.map(p => {
        const totalWinCount = state.games.reduce(accum, game => {
            if (player._id === game.player1._id) {
                return accum + game.player1.winCount;
            } else if (playerId === game.player2._id) {
                return accum + game.player2.winCount;
            } else {
                return accum;
            }

            return {
                ...p,
                totalWinCount: totalWinCount
            }
        })
        return resultsWinCount;
    }