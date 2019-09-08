import {API} from "../Api/api-service";

const ADD_PLAYER = "ADD_PLAYER";
const ADD_GAME = "ADD_GAME";
const SET_GAMES = "SET_GAMES";
const SET_PLAYERS = "SET_PLAYERS";
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
                winCount: 2
            },
            player2: {
                id: "2",
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
        case SET_GAMES : {
            return {
                ...state,
                games: action.games
            }
        }
        case SET_PLAYERS : {
            return {
                ...state,
                players: action.players
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
const setGames = (games) => ({type: SET_GAMES, games});
const setPlayers = (players) => ({type: SET_PLAYERS, players});

const changePlayer = (newPlayerName) => {
    return {type: CHANGE_PLAYER, newPlayerName};
}

export const updatePlayerName = (id, fullName) => async (dispatch) => {
    const player = await API.updatePlayer(id, fullName);
    dispatch(changePlayer(player.fullName));
};



export const getGames = () => async (dispatch) => {
    let res = await API.getGames();
    dispatch(setGames(res.data.games));
}
export const getPlayers = () => async (dispatch) => {
    let res = await API.getPlayers();
    console.log(res);
    dispatch(setPlayers(res.data.games));
}
export const addGameThunk = (player1Id, player2Id) => async (dispatch) => {
    let res = await API.addGame(player1Id, player2Id);
    dispatch(addGame(...res.data.game));
}
export const addPlayerThunk = (fullName) => async (dispatch) => {
    let res = await API.addPlayer(fullName);
    console.log(res);
    dispatch(addPlayer(...res.data.player));
}

export default reducer;