import { Card, createPack, getDeck, shuffle } from "./Components/Cards"
import { DeckHolder } from "./Components/DeckHolder"
import { Header } from "./Components/Header"
import styles from "./App.module.css"
import { CardHolder } from "./Components/CardHolder"
import { NipeDeckHolder } from "./Components/NipeDeckHolder"
import { useState } from "react"

export const App = () => {
  // var deck: Card[] = shuffle(getDeck(1))
  const packs: Card[][] = [shuffle(getDeck(1))]
  for (let i = 1; i < 9; i++) {
    [packs[0],packs[i]] = createPack(packs[0],i-1)
  }
  const [decks,setSecks] = useState([...packs,[],[],[],[]])

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <DeckHolder deck={decks[0]}></DeckHolder>
        <div className={styles.cardArea}>
          {decks.map((deck,index) => {
            if (index === 0 || index > 8)
              return
            return <CardHolder key={index} deck={deck} />
          })}
        </div>
        <div className={styles.nipeConteiners}>
          <NipeDeckHolder deck={decks[9] } nipe={"♣️"}></NipeDeckHolder>
          <NipeDeckHolder deck={decks[10]} nipe={"♠️"}></NipeDeckHolder>
          <NipeDeckHolder deck={decks[11]} nipe={"♥️"}></NipeDeckHolder>
          <NipeDeckHolder deck={decks[12]} nipe={"♦️"}></NipeDeckHolder>
        </div>
      </div>




    </>
  )
}

export default App
