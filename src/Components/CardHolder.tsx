import { useState } from "react"
import { Card, CardElement, TopOfCard, revealType } from "./Cards"
import styles from "./CardHolder.module.css"

interface Props {
    deck: Card[],
}

export const CardHolder = (props: Props) => {
    return (
        <div className={styles.cardHolder}>
            {props.deck.map((card, index) => {
                if (index !== props.deck.length - 1)
                    return <TopOfCard
                        key={card.value + card.nipe}
                        card={card}
                        reveal={card.reveal}
                    />

                if (card.reveal === revealType.HIDDEN) {
                    card.reveal = revealType.SHOW
                }

                return <CardElement
                    key={card.value + card.nipe}
                    card={card}
                    reveal={card.reveal}
                />
            })}
            {props.deck.length === 0 ? <CardElement card={props.deck[0]} reveal={revealType.EMPTY}></CardElement> : <></>}
        </div>
    )
}