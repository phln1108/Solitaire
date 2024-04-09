import { useState } from "react"
import { Card, CardElement, getDeck, revealType } from "./Cards"
import styles from "./DeckHolder.module.css"




interface Props {
    deck: Card[]
}

export const DeckHolder = (props: Props) => {
    const [deck, setDeck] = useState(props.deck)
    const [placeholder, setPlaceholder] = useState(getDeck(0))
    const revealDeck = deck.length == 0 ? revealType.EMPTY : revealType.HIDDEN
    const revealPlaceholder = placeholder.length == 0 ? revealType.EMPTY : revealType.SHOW

    function handleClickDeck() {
        if (deck.length > 0) {
            const newcard: Card = deck[0]
            setDeck((old_deck) => {
                return old_deck.slice(1, old_deck.length)
            })
            setPlaceholder([newcard, ...placeholder])
        }else {
            setDeck([...placeholder].reverse())
            setPlaceholder([...deck])
        }
        console.log("opa")
    }

    return (
        <div className={styles.cardHolder}>
            <CardElement onClick={handleClickDeck} card={deck[0]} reveal={revealDeck}></CardElement>
            <CardElement card={placeholder[0]} reveal={revealPlaceholder}></CardElement>
        </div>
    )
}