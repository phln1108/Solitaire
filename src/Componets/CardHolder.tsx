import { CardElement, Deck, revealType } from "./Cards"

type CardHolderProps = {
    deck: Deck,
    reveal: boolean
    onclick?: () => void
    state: number
}

export const Cardholder = (props: CardHolderProps) => {
    var state: revealType = props.reveal ? revealType.SHOW : revealType.HIDDEN
    if (props.deck.cards.length === 0)
        state = revealType.EMPTY
    return (
        <div onClick={props.onclick}>
            <CardElement card={props.deck.cards[props.state]} reveal={state}></CardElement>
        </div>
    )
}