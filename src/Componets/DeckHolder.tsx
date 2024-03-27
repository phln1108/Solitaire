import { useState } from "react"
import { Deck } from "./Cards"
import { Cardholder } from "./CardHolder"

type DeckHolderProps = {
    deck: Deck
}

export const DeckHolder = (props: DeckHolderProps) => {
    var deck: Deck = props.deck
    var leftovers: Deck = { cards: [] }
    var [state, setState] = useState(0)

    function clikOnDeck() {
        if (deck.cards.length === 0) {
            deck.cards = leftovers.cards
            leftovers.cards = []
        } else {
            var [card] = deck.cards.splice(0, 1)
            leftovers.cards.unshift(card)
        }
        console.log("opa")
        setState(0)
    }

    return (
        <div>
            <Cardholder deck={deck} reveal={false} onclick={clikOnDeck} state={state}/>
            <Cardholder deck={leftovers} reveal={true} state={state}/>
        </div>
    )
}