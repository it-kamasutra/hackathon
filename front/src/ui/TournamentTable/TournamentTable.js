import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addGameThunk, addPlayerThunk, updatePlayerName, getGames, getPlayers, updateGameScore} from "../../domain/reducer";
import {addPlayer} from "../../domain/reducer";


function findGame(games, p1Id, p2Id) {
    let oneGame = (games.find( el =>
        (el.player1.id === p1Id && el.player2.id === p2Id)
        || ( el.player2.id === p1Id && el.player1.id === p2Id)));
    return oneGame;
}

function TournamentTable(props) {
    const {players, games, updatePlayerName} = props;

    useEffect(() => {
        props.getPlayers();
        props.getGames();
    }, []);


    console.log(players);

    const headerTournamentTable = players.map( pl => {
            return (
                <th className="playerName ">
                    {pl.fullName}
                </th>
            )
        });

    const rowsTable = players.map( (p1, i) => {
        return <tr className="player" key={p1._id}>

            <th className="deletePlayer">
                <span>+</span>
            </th>
            <th className="playerName">
                {/*<span >Валера</span>*/}
                <input defaultValue={p1.fullName}></input>
            </th>



            {   players.map((p2, j) => {
                if (i === j) return <td className="intersection"></td>
                return <Cell key={i+ "-" + j} addGameThunk={props.addGameThunk} updateGameScore={props.updateGameScore} p1={p1} p2={p2} games={games}/>
            })}

       {/*     <td className="countCell current">
                <div className="countWrap">
                    <div className="count">
                        <div>
                            <span className="point">2</span>
                            <input className="point"></input>
                        </div>
                        <span className="separator">:</span>
                        <div>
                            <span className="point">1</span>
                            <input className="point"></input>
                        </div>
                    </div>

                </div>
            </td>

            <td className="countCell next">
                <div className="countWrap">
                    <div className="count">
                        <div>
                            <span className="point">0</span>
                            <input className="point" defaultValue="0"></input>
                        </div>
                        <span className="separator">:</span>
                        <div>
                            <span class="point">1</span>
                            <input className="point" defaultValue="0"></input>
                        </div>
                    </div>
                </div>
            </td>*/}

        </tr>
    })


    return (
            <div className="tournametTableWrapper">
                <table id="tournametCountTable">

                    <tr className="tableHeader">
                        <td></td>
                        <td className="logo"></td>
                        {headerTournamentTable}

                    </tr>

                    {rowsTable}


                </table>
                <div className="addBtn">
                    <button onClick={(()=>{props.addPlayerThunk("player new");})} className="addPlayerBtn">+</button>
                    <span>Добавьте участников</span>
                </div>
            </div>

    );
}

const Cell = (props) => {
    let score1ref = React.createRef();
    let score2ref = React.createRef();
    let game = findGame(props.games, props.p2._id, props.p1._id);
    let leftCount = 0;
    let rightCount = 0;
    if (game) {
        leftCount = props.p1._id == game.player1.id
            ? game.player1.winCount
            : game.player2.winCount;

        rightCount = props.p2._id == game.player2.id
            ? game.player2.winCount
            : game.player1.winCount;
    }

    const updateScore = () => {
        props.updateGameScore(game._id, score1ref.current.value, score2ref.current.value)
    }

    return <td className="countCell current" onClick={() => {
        if (!game) {
            props.addGameThunk(props.p1._id, props.p2._id);
        }
    }}>
        <div className="countWrap">
            <div className="count">
                <div>
                  {/*  <span className="point">{leftCount}</span>*/}
                    <input className="point" value={leftCount} onBlur={updateScore} ref={score1ref} />
                </div>
                <span className="separator">:</span>
                <div>
                    {/*<span className="point">{rightCount}</span>*/}
                    <input className="point" value={rightCount} onBlur={updateScore} ref={score2ref} />
                </div>
            </div>
        </div>
    </td>
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        games: state.games
    }
}


export default connect(mapStateToProps, {
    addPlayer, updatePlayerName, addPlayerThunk, addGameThunk,getGames,  getPlayers, updateGameScore
})(TournamentTable);
