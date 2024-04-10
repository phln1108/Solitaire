import { useState } from "react"
import { Card, CardElement, getDeck, revealType } from "./Cards"
import styles from "./DeckHolder.module.css"




interface Props {
    deck: Card[]
    handleClick : (cardIndex: number) => void
}

export const DeckHolder = (props: Props) => {
    const [deck, setDeck] = useState(props.deck)
    const [placeholder, setPlaceholder] = useState(getDeck(0))
    const [revealedCard, setRevealedCard] = useState(deck.length)
    const revealDeck = deck.length == 0 ? revealType.EMPTY : revealType.HIDDEN
    const revealPlaceholder = placeholder.length == 0 ? revealType.EMPTY : revealType.SHOW

    function handleClickDeck() {
        if (deck.length > 0) {
            const newcard: Card = deck[deck.length -1]
            setDeck((old_deck) => {
                return old_deck.slice(0,old_deck.length -1)
            })
            setPlaceholder([...placeholder, newcard])
            setRevealedCard(revealedCard -1)
        }else {
            setDeck([...placeholder].reverse())
            setPlaceholder([...deck])
            setRevealedCard(placeholder.length)
        }
        console.log(revealedCard-1)
    }

    return (
        <div className={styles.cardHolder}>
            <CardElement onClick={handleClickDeck} card={deck[deck.length -1]} reveal={revealDeck}></CardElement>
            <CardElement onClick={() => {placeholder.length !== 0 ? props.handleClick(revealedCard) : ""}} card={placeholder[placeholder.length -1]} reveal={revealPlaceholder}></CardElement>
        </div>
    )
}