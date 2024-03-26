import { useState } from "react"
import "./Cards"
import { Deck } from "./Cards"

type CardHolderProps = {
    deck: Deck,
    // onclick: () => void
}

export const Cardholder = (props : CardHolderProps) => {
    var [teste,setTeste] = useState(0)

    function onclick() {
        setTeste(teste + 1)
    }


    return (
        <>
            <button onClick={onclick}>{props.deck.cards[teste].value}{props.deck.cards[teste].nipe}</button>
            {/* <button>{props.deck.cards.length}</button> */}
        </>
    )
}