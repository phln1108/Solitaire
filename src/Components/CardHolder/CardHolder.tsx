import { Card, CardElement, revealType } from "../Cards/Cards"
import styles from "./CardHolder.module.css"

interface CardHolderProps {
    deck: Card[],
    id: number,
    clickHandler: (id: number, index: number) => void,
    selected: number
}

export const CardHolder = (props: CardHolderProps) => {
    return (
        <div className={styles.cardHolder}>
            <CardElement
                selected={false}
                onClick={() => { props.clickHandler(props.id, -1) }}
                card={props.deck[0]}
                reveal={revealType.EMPTY}
            />

            {props.deck.map((card, index) => {
                if (index === props.deck.length - 1 && card.reveal === revealType.HIDDEN)
                    card.reveal = revealType.SHOW

                return (<CardElement
                    translate={index * 70 + 100}
                    key={card.value + card.nipe}
                    card={card}
                    reveal={card.reveal}
                    onClick={card.reveal === revealType.SHOW ? () => { props.clickHandler(props.id, index) } : undefined}
                    selected={index === props.selected}
                />
                )
            })}
        </div>
    )
}