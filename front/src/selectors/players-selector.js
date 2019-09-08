export const getPlayersWithScores = (state) => {


    let resultPlayers = state.players.map( p => {
        return {
            fullName: p.fullName,
            totalScores: 0 // по games и считаем кол-во побед. 1 победа - 2 балл,
            // ничья - 1,
            // поражение - 0reduce
        }
    });



    return resultPlayers;
}