import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import SettlementRandomize from "./SettlementRandomize"

function MonumentRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var monument = ""

    if (rand === 1) {
        monument = "Standing stones / Obelisks / Large stone carvings. Q/A to discern more. Might have runes inscribed."
    } else if (rand === 2) {
        monument = "Charcoal burning mound. Q/A rolls to determine what is being burnt here ? Orcs ? "
    } else if (rand === 3) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Easy encounter!"
        }
        monument = "Tribal totem pole. Q/A to determine who is nearby, if anyone." + temp2
    } else if (rand === 4) {
        monument = "Small Shrine. Q/A to determine god it is dedicated to, and also whether it is currently attended."
    } else if (rand === 5) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Unmarked settlement! " + SettlementRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 11) {
            temp2 += " Clue! " + ClueRandomize()
        }
        monument = "Sign to show nearby settlements."
    } else if (rand === 6) {
        monument = "Cliff face with carved faces of gods. Q/A to determine god it is dedicated to, and also whether it is currently attended."
    } else if (rand === 7) {
        monument = "Statue of ancient leader. Q/A / History rolls to discern more."
    } else if (rand === 8) {
        monument = "Statue of famous adventurer. Anything hidden here?"
    } else if (rand === 9) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 71) {
            temp2 += " Guarded by tribe people / barbarians."
        }
        monument = "Significant / tribally important tree or other natural feature." + temp2
    } else if (rand === 10) {
        monument = "Ancient Stone Pillars. Part of ruins? Q/A / History rolls to discern more."
    } else if (rand === 11) {
        monument = "Ruined stone walls. Q/A / History rolls to discern more."
    } else if (rand === 12) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Stained with blood."
        }
        monument = "Altar / Pedestal. Sacrificial?" + temp2
    } else if (rand === 13) {
        monument = "Large, scattered boulders of interesting shapes. Q/A / Nature rolls to discern more."
    } else if (rand === 14) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Already looted."
        }
        monument = "Single tomb of notable identity." + temp2
    } else if (rand === 15) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        monument = "Mountain of bones. Q/A / Nature rolls to discern more." + temp2
    } else if (rand === 16) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        monument = "Ancient battlefield, with monument in remembrance of the dead. Q/A / History rolls to discern more." + temp2
    } else if (rand === 17) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Clue! " + ClueRandomize()
        }
        monument = "Burnt down building." + temp2
    } else if (rand === 18) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Easy encounter! (with some insect like being perhaps??)."
        }
        monument = "Termite or other insect mound. Nature check to discern more." + temp2
    } else if (rand === 19) {
        monument = "Ley lines. Q/A to discern more, like who drew them here and how long ago?"
    } else {
        monument = "A lone archway in the middle of nowhere! Portal?"
    }

    return monument
}

export default MonumentRandomize
