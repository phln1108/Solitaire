import { useState } from "react"
import { Card, CardElement, revealType } from "./Cards"

interface Props {
    deck: Card[],
    nipe: string
}

export const NipeDeckHolder = (props: Props) => {
    const revealDeck = props.deck.length === 0 || props.deck.length === 0? revealType.EMPTY : revealType.SHOW 
    const [topCard, setTopCard] = useState(0)

    const handleClickCard = () => {
        setTopCard(topCard + 1)
    }

    return (
        <div onClick={handleClickCard}>
            <CardElement card={props.deck[topCard]} reveal={revealDeck} empty_nipe={props.nipe}></CardElement>
        </div>
    )
}