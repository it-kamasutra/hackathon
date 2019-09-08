const ADD_PLAYER = "ADD_PLAYER";
const ADD_GAME = "ADD_GAME";
const CHANGE_PLAYER = "CHANGE_PLAYER";

const initialState = {
    players: [
        {
            _id: "1",
            fullName: "Seryoja Borovik"
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
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, {_id: action._id, fullName: action.fullName}]
            }
        }
        case ADD_GAME: {
            return {
                ...state,
                games: [...state.games, {
                    startDate: action.startDate,
                    endDate: action.endDate,
                    _id: action._id,
                    player1: {
                        _id: action._id1,
                        winCount: action.winCount1
                    },
                    player2: {
                        _id: action._id2,
                        winCount: action.winCount2
                    }
                }]
            }
        }
        case CHANGE_PLAYER: {
            return {
                ...state,

            }
        }
        default:
            return state
    }
}

const addPlayer = (_id, fullName) => {
    return { type: ADD_PLAYER, _id, fullName };
}
const addGame = (startDate, endDate, _id, _id1, _id2, winCount1, winCount2) => {
    return { type: ADD_GAME, startDate, endDate, _id, _id1, _id2, winCount1, winCount2 };
}

const changePlayer = (newPlayerName) => {
    return {type: CHANGE_PLAYER, newPlayerName};
}

export const updatePlayerName = (fullName) => (dispatch) => {
    // setTimeout(() => {
    //     dispatch(changePlayer(fullName))
    // })
}

export default reducer;