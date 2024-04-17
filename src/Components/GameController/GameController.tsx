import { useEffect, useState } from "react"
import { Card, createPack, getIndex } from "../Cards/Cards"
import { DeckHolder } from "../DeckHolder/DeckHolder"
import { NipeDeckHolder } from "../NipeDeckHolder/NipeDeckHolder"
import { CardHolder } from "../CardHolder/CardHolder"

import styles from "./GameController.module.css"

interface Props {
    deck: Card[]
}

export const GameController = (props: Props) => {
    const [decks, setDecks] = useState<Card[][]>(start())
    const [firstSelected, setFirstSelected] = useState(-1)
    const [deckHolderCard, setDeckHolderCard] = useState(-1)
    const [selectedCard, setSelectedCard] = useState(-1)
    
    useEffect(()=>{
        setDecks(start())
    },[props.deck])

    function start() {
        const packs: Card[][] = [[...props.deck]]
        for (let i = 1; i < 8; i++) {
            [packs[0], packs[i]] = createPack(packs[0], i - 1)
        }
        return [...packs, [], [], [], []]
    }

    function handleDeckHolderSelect(cardIndex: number) {
        if (firstSelected === 0 || cardIndex === -1) {
            setFirstSelected(-1)
            return
        }
        setFirstSelected(0)
        setDeckHolderCard(cardIndex)
    }

    function handleCardHOlderSelect(id: number, index: number) {
        console.log(decks[id][decks[id].length - 1])

        if (firstSelected === id || (index == -1 && firstSelected == -1)) {
            if (index !== selectedCard){
                setSelectedCard(index);
                return
            }
            setFirstSelected(-1)
            // setSelectedCard(-1)
            return
        }

        if (firstSelected === -1) {
            setFirstSelected(id)
            setSelectedCard(index)
            return
        }

        var indexCard = firstSelected === 0 ? deckHolderCard : selectedCard
        console.log(indexCard)
        const card: Card = decks[firstSelected][indexCard]
        console.log(card)

        if ((decks[id].length !== 0 && card.color !== decks[id][decks[id].length - 1].color && getIndex(decks[id][decks[id].length - 1]) - 1 === getIndex(card)) || (decks[id].length === 0 && card.value === "K")) {
            if (firstSelected == 0) {
                setDecks(old_decks => {
                    const new_decks = [...old_decks]
                    new_decks[firstSelected] = [...new_decks[firstSelected]].filter((deckDard) => {
                        return card.value !== deckDard.value || card.nipe !== deckDard.nipe
                    })
                    new_decks[id] = [...new_decks[id], card]
                    return new_decks
                })
            } else {
                setDecks(old_decks => {
                    const new_decks = [...old_decks]
                    const packOfCards = new_decks[firstSelected].slice(indexCard)
                    console.log(packOfCards)
                    new_decks[firstSelected] = new_decks[firstSelected].slice(0, indexCard)
                    new_decks[id] = [...new_decks[id], ...packOfCards]
                    console.log(new_decks[id])
                    return new_decks
                })
            }
        } else if ((index !== -1 || firstSelected !== -1)) {
            setFirstSelected(id)
            setSelectedCard(index)
            return
        }
        setFirstSelected(-1)
        setSelectedCard(-1)
    }

    function handleNipeCardHOlderSelect(id: number, nipe: string) {
        if (firstSelected === -1) {
            return
        }
        var index = firstSelected === 0 ? deckHolderCard : decks[firstSelected].length - 1
        console.log(index)
        const card: Card = decks[firstSelected][index]
        console.log(card)

        if ((decks[id].length === 0 && card.value === "A" || (decks[id].length !== 0 && getIndex(decks[id][decks[id].length - 1]) === getIndex(card) - 1)) && card.nipe === nipe) {
            setDecks(old_decks => {
                const new_decks = [...old_decks]
                new_decks[firstSelected] = [...new_decks[firstSelected]].filter((deckDard) => {
                    return card.value !== deckDard.value || card.nipe !== deckDard.nipe
                })
                new_decks[id] = [...new_decks[id], card]
                return new_decks
            })
        }
        setFirstSelected(-1)
    }



    return (
        <div className={styles.wrapper}>
            <DeckHolder selected={firstSelected == 0 ? 1 : -1} handleClick={handleDeckHolderSelect} deck={decks[0]}></DeckHolder>
            <div className={styles.cardArea}>
                {decks.map((deck, index) => {
                    if (index === 0 || index > 7)
                        return
                    return <CardHolder selected={firstSelected === index ? selectedCard : -1} clickHandler={handleCardHOlderSelect} key={index} deck={deck} id={index} />
                })}
            </div>
            <div className={styles.nipeConteiners}>
                <NipeDeckHolder handleClick={handleNipeCardHOlderSelect} deck={decks[8]} nipe={"♣️"} id={8}></NipeDeckHolder>
                <NipeDeckHolder handleClick={handleNipeCardHOlderSelect} deck={decks[9]} nipe={"♠️"} id={9}></NipeDeckHolder>
                <NipeDeckHolder handleClick={handleNipeCardHOlderSelect} deck={decks[10]} nipe={"♥️"} id={10}></NipeDeckHolder>
                <NipeDeckHolder handleClick={handleNipeCardHOlderSelect} deck={decks[11]} nipe={"♦️"} id={11}></NipeDeckHolder>
            </div>
        </div>
    )
}