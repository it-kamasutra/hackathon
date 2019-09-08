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
                _id: 1,
                winCount: 1
            },
            player2: {
                _id: 1,
                winCount: 1
            }
        }
    ]
}