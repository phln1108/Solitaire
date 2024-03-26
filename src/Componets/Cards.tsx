export const CardInfo = {
    nipes: ["♣️", "♠️", "♥️", "♦️"],
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    colors: ["r", "b"]
}

export type Card = {
    value: string //"A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K"
    nipe: string //"♣️" | "♠️" | "♥️" | "♦️"
    color: string //"r" | "b"
}

export type Deck = {
    cards: Array<Card>
}

export function getDeck(num: number = 1): Deck {
    var deck: Deck = { cards: [] }
    for (let i = 0; i < num; i++) {
        CardInfo.nipes.forEach(n => {
            CardInfo.values.forEach(v => {
                var card: Card = {
                    value: v,
                    nipe: n,
                    color: n === "♣️" || n === "♠️" ? "b" : "r"
                }
                deck.cards.push(card)
            })
        })
    }
    return deck
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export function shuffle(deck: Deck): Deck {
    var shuffled_deck: Deck = { cards: [] }
    var cards: Array<Card> = [...deck.cards]
    while (cards.length !== 0) {
        var num: number = getRandomInt(cards.length)
        shuffled_deck.cards.push(cards[num])
        cards.splice(num, 1)
    }
    return shuffled_deck
}

/**
 * Divide the given Deck to multiples parts setted by `num`.
 * The last pack may not have the same quantity compare to the others if `num` is not a divisor of total of cards 
 * @param deck deck to divide into packs
 * @param num max number of cards in a pack (default = 52) 
 * @returns Array of decks containing the divided packs
 */
export function divideDeck(deck: Deck, num: number = 52): Array<Deck> {
    var decks: Array<Deck> = []
    while (deck.cards.length !== 0) {
        var new_deck: Deck = { cards: deck.cards.splice(0, num > deck.cards.length ? deck.cards.length : num) }
        decks.push(new_deck)
    }
    return decks
}

/**
 * Divide a single pack from the original deck setted by `num`.
 * If the deck don't have sufficient cards to divide, the pack gains the max amount possible.
 * @param deck deck to remove a pack
 * @param num number of cards to create a new pack
 * @returns Array of decks → [ given deck, new pack formed ]
 */
export function createPack(deck: Deck, num: number): Array<Deck> {
    var decks: Array<Deck> = []
    var new_pack: Deck = { cards: deck.cards.splice(0, num > deck.cards.length ? deck.cards.length : num) }
    var new_deck: Deck = { cards: deck.cards.splice(0, deck.cards.length) }
    decks.push(new_deck)
    decks.push(new_pack)
    return decks
}
export const CardElement = (card: Card) => {
    return (
        <>
        
        </>
    )
}