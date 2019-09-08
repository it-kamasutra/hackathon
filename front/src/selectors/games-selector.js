export const getPlayersWithScores = (state, playerId) => {


    let resultWinCount = state.games.reduce( acc, game => {
        if (playerId === game.player1._id) {
            return acc + game.player1.winCount;
        } else if (playerId === game.player2._id) {
            return acc + game.player2.winCount;
        } else {
            return acc;
        }
    }, 0);

    return resultWinCount;
}