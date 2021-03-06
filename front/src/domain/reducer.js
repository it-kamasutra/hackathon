import {API} from "../api/api-service";

const ADD_PLAYER = "ADD_PLAYER";
const ADD_GAME = "ADD_GAME";
const SET_GAMES = "SET_GAMES";
const SET_PLAYERS = "SET_PLAYERS";
const CHANGE_PLAYER = "CHANGE_PLAYER";

const initialState = {
    players: [

    ],
    games: [

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
    dispatch(setGames(res.data));
}
export const getPlayers = () => async (dispatch) => {
    let res = await API.getPlayers();
    console.log(res);
    dispatch(setPlayers(res.data));
}
export const addGameThunk = (player1Id, player2Id) => async (dispatch) => {
    let res = await API.addGame(player1Id, player2Id);
    dispatch(addGame(...res.data));
}

export const updateGameScore = (id, score1, score2) => async (dispatch) => {
    let res = await API.updateGameScore(id, score1, score2);
    dispatch(addGame(...res.data.game));
}
export const addPlayerThunk = (fullName) => async (dispatch) => {
    let res = await API.addPlayer(fullName);
    console.log(res);
    dispatch(addPlayer(res.data));
}
export const deletePlayerThunk = (id) => async (dispatch) => {
    let res = await API.deletePlayer(id);
    //dispatch(deletePlayer(res.data.player.id));
}

export default reducer;