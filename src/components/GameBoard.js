import React, { Component } from 'react'

class GameBoard extends Component {
  render() {
    return (
      <main>
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
        <p >{"📌: "}
          <span id="flags"> {" 8"} </span></p>
      </main>
    )
  }
}

export default GameBoard
