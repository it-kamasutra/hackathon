import React from 'react';
import {connect} from "react-redux";
import {getPlayersWithScores} from "../../selectors/games-selector";

const ResultTable = (props) =>{
    return (
        <div className="resultsTableWrapper">
            <table id="resultsTable">
                <caption>Таблица результатов</caption>
                <tr>
                    <th className="cellHeader position">
                        Место
                    </th>
                    <th className="cellHeader playerName">
                        Игрок
                    </th>
                    <th className="cellHeader points">
                        Всего очков
                    </th>
                </tr>

                { props.players.map((p, i) => {
                    return <tr className="player">
                        <td className="countCell">
                            <span>{i + 1}</span>
                        </td>

                        <td className="countCell name">
                            <span>{p.fullName}</span>
                        </td>

                        <td className="countCell">
                            <span>{p.totalWinCount}</span>
                        </td>
                    </tr>

                }) }

                {/*<tr className="player">
                    <td className="countCell">
                        <span>1</span>
                    </td>

                    <td className="countCell name">
                        <span>Валера</span>
                    </td>

                    <td className="countCell">
                        <span>12</span>
                    </td>
                </tr>

                <tr className="player">
                    <td className="countCell">
                        <span>2</span>
                    </td>

                    <td className="countCell name">
                        <span>Ваня</span>
                    </td>

                    <td className="countCell">
                        <span>11</span>
                    </td>
                </tr>

                <tr className="player">
                    <td className="countCell">
                        <span>3</span>
                    </td>

                    <td className="countCell name">
                        <span>Виктор</span>
                    </td>

                    <td className="countCell">
                        <span>10</span>
                    </td>
                </tr>

                <tr className="player">
                    <td className="countCell">
                        <span>4</span>
                    </td>

                    <td className="countCell name">
                        <span>Саша</span>
                    </td>

                    <td className="countCell">
                        <span>9</span>
                    </td>
                </tr>
*/}
            </table>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        players: getPlayersWithScores(state),
        games: state.games
    }
}

export default connect(mapStateToProps)(ResultTable);

