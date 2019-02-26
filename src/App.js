import React, { Component } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
// import axios from 'axios'


class App extends Component {
  // componentDidMount() {
  //   axios
  //     .post('https://minesweeper-api.herokuapp.com/games', {
  //       difficulty: 0
  //     })
  //     .then(resp => {
  //       console.log({ resp })
  //     })
  // }

  render() {
    return (
      <>
        <Header />
        <GameBoard />
      </>
    )
  }
}

export default App
