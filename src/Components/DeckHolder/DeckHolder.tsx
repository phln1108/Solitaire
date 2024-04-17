import { useState } from "react"
import { Card, CardElement, revealType } from "../Cards/Cards"
import styles from "./DeckHolder.module.css"


interface DeckHolderProps {
    deck: Card[],
    handleClick: (cardIndex: number) => void,
    selected: number
}

export const DeckHolder = (props: DeckHolderProps) => {
    const [revealedCard,setRevealedCard] = useState(props.deck.length)
    const revealDeck = revealedCard === 0 ? revealType.EMPTY : revealType.HIDDEN
    const revealPlaceholder = revealedCard === props.deck.length ? revealType.EMPTY : revealType.SHOW

    function handleClickDeck() {
        props.handleClick(-1)
        if (revealedCard === 0) {
            setRevealedCard(props.deck.length)
            return
        }
        setRevealedCard(revealedCard - 1)
    }

    function handleClickPlaceholder() {
        if (revealPlaceholder !== revealType.EMPTY) {
            props.handleClick(revealedCard)
        }
    }

    return (
        <div className={styles.cardHolder}>
            <CardElement selected={false} onClick={handleClickDeck} card={props.deck[props.deck.length - 1]} reveal={revealDeck}></CardElement>
            <CardElement selected={props.selected !== -1} onClick={handleClickPlaceholder} card={props.deck[revealedCard]} reveal={revealPlaceholder}></CardElement>
        </div>
    )
}