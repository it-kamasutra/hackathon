

const initialState = {
    players: [
        {
            _id: "1",
            fullName: "Seryoja Borovik"
        },
        {
            _id: "2",
            fullName: "Lesha"
        },
        {
            _id: 3,
            fullName: "Dimych"
        }
    ],
    games: [
        {
            startDate: new Date(),
            endDate: new Date(),
            _id: 1,
            player1: {
                id: 1,
                winCount: 1
            },
            player2: {
                id: 1,
                winCount: 1
            }
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default reducer;