import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {addGameThunk, addPlayerThunk, updatePlayerName} from "../../domain/reducer";
import {addPlayer} from "../../domain/reducer";


function findGame(games, p1Id, p2Id) {
    let oneGame = (games.find( el =>
        (el.player1.id === p1Id && el.player2.id === p2Id)
        || ( el.player2.id === p1Id && el.player1.id === p2Id)));
    return oneGame;
}

function TournamentTable(props) {
    const {players, games, updatePlayerName} = props;




    console.log(players);

    const headerTournamentTable = players.map( pl => {
            return (
                <th className="playerName ">
                    {pl.fullName}
                </th>
            )
        });

    const rowsTable = players.map( (p1, i) => {
        return <tr className="player">

            <th className="deletePlayer">
                <span onClick={()=>{}>+</span>
            </th>
            <th className="playerName">
                {/*<span >Валера</span>*/}
                <input defaultValue={p1.fullName}></input>
            </th>

            {/*<td className="intersection"></td>*/}

            {   players.map((p2, j) => {
                let game = findGame(games, p2._id, p1._id);
                let leftCount = 0;
                let rightCount = 0;
                if (game) {
                    leftCount = p1._id == game.player1.id
                        ? game.player1.winCount
                        : game.player2.winCount;

                    rightCount = p2._id == game.player2.id
                        ? game.player2.winCount
                        : game.player1.winCount;
                }
                if (j == i) {
                    return <td className="intersection"></td>
                }

                return <td className="countCell current">
                    <div className="countWrap">
                        <div className="count">
                            <div>
                                <span className="point">{leftCount}</span>
                                {/*<input className="point"></input>*/}
                            </div>
                            <span className="separator">:</span>
                            <div>
                                <span className="point">{rightCount}</span>
                                {/*<input className="point"></input>*/}
                            </div>
                        </div>

                    </div>
                </td>
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

                  {/*  <tr className="player">

                        <th className="deletePlayer">
                            <span>+</span>
                        </th>
                        <th className="playerName">
                            <span >Валера</span>
                            <input defaultValue='Саша'></input>
                        </th>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                </div>

                            </div>
                        </td>

                        <td className="intersection"></td>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span class="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                </div>
                            </div>
                        </td>

                    </tr>

                    <tr className="player">

                        <th className="deletePlayer">
                            <span>+</span>
                        </th>
                        <th className="playerName">
                            <span >Валера</span>
                            <input defaultValue='Саша'></input>
                        </th>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                </div>

                            </div>
                        </td>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        <input className="point"></input>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td className="intersection"></td>
                    </tr>
*/}
                </table>
                <div className="addBtn">
                    <button onClick={(()=>{props.addPlayerThunk("player new");})} className="addPlayerBtn">+</button>
                    <span>Добавьте участников</span>
                </div>
            </div>

    );
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        games: state.games
    }
}


export default connect(mapStateToProps, {
    addPlayer, updatePlayerName, addPlayerThunk, addGameThunk
})(TournamentTable);
