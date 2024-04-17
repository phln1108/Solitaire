import { Card, CardElement, revealType } from "../Cards/Cards"

interface Props {
    deck: Card[],
    nipe: string
    id: number
    handleClick: (id: number, nipe: string,) => void
}

export const NipeDeckHolder = (props: Props) => {
    const revealDeck = props.deck.length === 0 || props.deck.length === 0 ? revealType.EMPTY : revealType.SHOW

    return (<CardElement selected={false} onClick={() => { props.handleClick(props.id, props.nipe) }} card={props.deck[props.deck.length -1]} reveal={revealDeck} empty_nipe={props.nipe}></CardElement>)
}