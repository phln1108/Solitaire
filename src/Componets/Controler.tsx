import { getDeck } from "./Cards"
import { DeckHolder } from "./DeckHolder"

export const Controler = () => {
    var deck1 = getDeck(1)
    // var deck2 = getDeck(1)

    return (
        <>
            <DeckHolder deck={deck1}></DeckHolder>
            {/* <button>Cards</button> */}
            {/* <Cardholder deck={deck1} reveal={true}/>
            <Cardholder deck={deck2} reveal={true}/> */}
        </>
    )
}
