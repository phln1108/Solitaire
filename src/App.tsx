import { getDeck, shuffle } from "./Components/Cards"
import { Header } from "./Components/Header"
// import styles from "./App.module.css"

import { useState } from "react"
import { GameController } from "./Components/GameController"

export const App = () => {
  const [deck,setDeck] = useState(shuffle(getDeck(1)))

  function restart() {
    setDeck(shuffle(getDeck(1)))
  }

  return (
    <>
      <Header/>
      <GameController deck={deck}/>
    </>
  )
}

export default App
