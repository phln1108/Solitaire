import { Cardholder } from "./CardHolder"
import "./Cards"
import { Deck, divideDeck, getDeck, shuffle } from "./Cards"

export const Controler = () => {
    var [deck1,deck2]: Array<Deck> = divideDeck(shuffle(getDeck(2)))    
    

    return (
        <>
            {/* <button>Cards</button> */}
            <Cardholder deck={deck1} />
            <Cardholder deck={deck2} />
        </>
    )
}
