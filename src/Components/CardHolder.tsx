import { Card, CardElement, revealType } from "./Cards"
import styles from "./CardHolder.module.css"

interface PropsCardHolder {
    deck: Card[],
    id: number
    clickHandler: (id: number, index: number) => void
    selected: number
}

export const CardHolder = (props: PropsCardHolder) => {
    return (
        <div className={styles.cardHolder}>
            {props.deck.map((card, index) => {
                if (index !== props.deck.length - 1)
                    return <CardElement
                        translate={index * 70}
                        key={card.value + card.nipe}
                        card={card}
                        reveal={card.reveal}
                        onClick={card.reveal === revealType.SHOW ? () => { props.clickHandler(props.id, index) } : undefined}
                        selected={index == props.selected}
                    />
                if (card.reveal === revealType.HIDDEN) {
                    card.reveal = revealType.SHOW
                }

                return <CardElement
                    translate={index * 70}
                    key={card.value + card.nipe}
                    card={card}
                    reveal={card.reveal}
                    onClick={() => { props.clickHandler(props.id, index) }}
                    selected={index == props.selected}
                />
            })}
            {props.deck.length === 0 ? <CardElement selected={false} onClick={() => { props.clickHandler(props.id, -1) }} card={props.deck[0]} reveal={revealType.EMPTY} /> : <></>}
        </div>
    )
}