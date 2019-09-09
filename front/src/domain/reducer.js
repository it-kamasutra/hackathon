import {API} from "../api/api-service";

const ADD_PLAYER = "ADD_PLAYER";
const ADD_GAME = "ADD_GAME";
const SET_GAME = "SET_GAME";
const CHANGE_PLAYER = "CHANGE_PLAYER";

const initialState = {
    players: [
        {
            _id: "1",
            fullName: "Seryoja Borovik"
        },
        {
            _id: "2",
            fullName: "Dimych"
        }
    ],
    games: [
        {
            startDate: new Date(),
            endDate: new Date(),
            _id: 1,
            player1: {
                id: "1",
                winCount: 0
            },
            player2: {
                id: "2",
                winCount: 2
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
        case SET_GAME : {
            return {
                ...state,
                games: action.games
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

export const addPlayer = (_id, fullName) => {
    return { type: ADD_PLAYER, _id, fullName };
}
const addGame = (startDate, endDate, _id, _id1, _id2, winCount1, winCount2) => {
    return { type: ADD_GAME, startDate, endDate, _id, _id1, _id2, winCount1, winCount2 };
}
const setGames = (games) => ({type: SET_GAME, games});

const changePlayer = (newPlayerName) => {
    return {type: CHANGE_PLAYER, newPlayerName};
}

export const updatePlayerName = (fullName) => (dispatch) => {
    // setTimeout(() => {
    //     dispatch(changePlayer(fullName))
    // })
}

export const getGames = () => async (dispatch) => {
    let res = await API.getGames();
    console.log(res);
    dispatch(setGames(res.data.games));
}
export const addGameThunk = (player1Id, player2Id) => async (dispatch) => {
    let res = await API.addGame(player1Id, player2Id);
    console.log(res);
    dispatch(addGame(...res.data.game));
}
export const addPlayerThunk = (fullName) => async (dispatch) => {
    let res = await API.addPlayer(fullName);
    console.log(res);
    dispatch(addPlayer(...res.data.player));
}

export default reducer;