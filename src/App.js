import React, { Component } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'


class App extends Component {


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
