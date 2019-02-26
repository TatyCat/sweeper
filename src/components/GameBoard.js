import React, { Component } from 'react'
import axios from 'axios'


class GameBoard extends Component {
  componentDidMount() {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: 0
      })
      .then(response => {
        console.log(response.data)
        return response.data
      })
      .then(gameData => {
        console.log(gameData.board)
        const gameboardData = gameData.board
        const gameboardId = gameData.id

      })
  }

  render() {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <td className="boom"> {" 4 "}</td>
              <td className="boom"> {" 2 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 1 "}</td>
              <td className="boom"> {" 💣 "}</td>
            </tr>
            <tr>
              <td> {" - "}</td>
              <td> {" 3 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {"  "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 2 "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td className="boom"> {" 5 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td> {" 2 "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 4 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 💣 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 💣 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td className="boom"> {" 3 "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td className="boom"> {" 2 "}</td>
              <td> {" - "}</td>
              <td> {" 💣 "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
            </tr><tr>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
              <td> {" - "}</td>
            </tr>
          </tbody>
        </table>
        <p >{"📌: "}
          <span id="flags"> {" 8"} </span></p>
      </>
    )
  }
}

export default GameBoard
