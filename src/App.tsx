import { getDeck, shuffle } from "./Components/Cards/Cards"
import { Header } from "./Components/Header/Header"
// import styles from "./App.module.css"

import { useState } from "react"
import { GameController } from "./Components/GameController/GameController"
import { About } from "./Components/About/About"

export const App = () => {
  const [deck, setDeck] = useState(shuffle(getDeck(1)))
  const [showAbout, setShowAbout] = useState(false)

  function restart() {
    console.log("restart");

    setDeck(shuffle(getDeck(1)))
  }

  function handleAbout() {
    setShowAbout(!showAbout)
  }

  return (
    <>
      <Header about={handleAbout} restart={restart} />
      <GameController deck={deck} />
      {showAbout &&
        <About toClose={handleAbout} />
      }
    </>
  )
}

export default App
