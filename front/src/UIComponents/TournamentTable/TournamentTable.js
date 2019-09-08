import React from 'react';

function TournamentTable() {
    return (
        <div >

            <div className="header">Турнир по настольному теннису</div>
            <div className="tournametTableWrapper">
                <table id="tournametCountTable">
                    <tr className="tableHeader">
                        <td></td>
                        <td class="logo"></td>
                        <th className="playerName ">
                            Валера
                        </th>
                        <th className="playerName">
                            Саша
                        </th>
                        <th className="playerName">
                            Дима
                        </th>
                    </tr>

                    <tr className="player">

                        <th className="deletePlayer">
                            <span>+</span>
                        </th>
                        <th className="playerName">
                            {/*<span >Валера</span>*/}
                            <input defaultValue='Валера'></input>
                        </th>

                        <td className="intersection"></td>

                        <td className="countCell current">
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

                        <td className="countCell next">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        {/*<span className="point">0</span>*/}
                                        <input className="point" defaultValue="0"></input>
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        {/*<span class="point">1</span>*/}
                                        <input className="point" defaultValue="0"></input>
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
                            {/*<span >Валера</span>*/}
                            <input defaultValue='Саша'></input>
                        </th>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
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
                                        {/*<input className="point"></input>*/}
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span class="point">0</span>
                                        {/*<input className="point"></input>*/}
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
                            {/*<span >Валера</span>*/}
                            <input defaultValue='Саша'></input>
                        </th>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
                                    </div>
                                </div>

                            </div>
                        </td>

                        <td className="countCell">
                            <div className="countWrap">
                                <div className="count">
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
                                    </div>
                                    <span className="separator">:</span>
                                    <div>
                                        <span className="point">0</span>
                                        {/*<input className="point"></input>*/}
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td className="intersection"></td>
                    </tr>

                </table>
                <div className="addBtn">
                    <button className="addPlayerBtn">+</button>
                    <span>Добавьте участников</span>
                </div>
            </div>
        </div>
    );
}

export default TournamentTable;
