import React from 'react';
import {connect} from 'react-redux';
import {updatePlayerName} from "../../domain/reducer";
import {addPlayer} from "../../domain/reducer";

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

    const rowsTable = players.map( (el, i) => {
        return <tr className="player">

            <th className="deletePlayer">
                <span>+</span>
            </th>
            <th className="playerName">
                {/*<span >Валера</span>*/}
                <input defaultValue={el.fullName}></input>
            </th>

            {/*<td className="intersection"></td>*/}

            {   players.map((p, j) => {
                if (j == i) {
                    return <td className="intersection"></td>
                }

                return <td className="countCell current">
                    <div className="countWrap">
                        <div className="count">
                            <div>
                                <span className="point">2</span>
                                {/*<input className="point"></input>*/}
                            </div>
                            <span className="separator">:</span>
                            <div>
                                <span className="point">1</span>
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
                    <button className="addPlayerBtn">+</button>
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
    addPlayer, updatePlayerName
})(TournamentTable);
