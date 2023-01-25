import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import SettlementRandomize from "./SettlementRandomize"

function WaterwayRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var waterway = ""
    var temp2 = ""

    if (rand < 51) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 16) {
            temp2 += " Waterfall nearby."
        }
        waterway = "Stream /river running through." + temp2
    } else if (rand > 50 && rand < 56) {
        waterway = "Slightly larger river, might be difficult to ford. Survival check, DC 12 to ford. On a fail, you lose 1d4 perishable goods downstream and are soaked through.If it's cold, you might need to stop and make a fire to dry off."
    } else if (rand > 55 && rand < 61) {
        waterway = "A man-made waterway of some sort, irrigation channel perhaps ?  Q/A rolls to discern purpose."
    } else if (rand > 60 && rand < 66) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            temp2 += " Clue! " + ClueRandomize()
        } else {
            temp2 += " Just a branch."
        }
        waterway = "Deep but narrow stream. You see something float by! Dex check to grab it." + temp2
    } else if (rand > 65 && rand < 71) {
        waterway = "Large, unmapped river. Could be rideable in canoe. DC 19 Survival check to craft boat (if in forest or trees are nearby).Q / A rolls and DC 12 History roll to discern more about this river."
    } else if (rand > 70 && rand < 76) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            temp2 += " Medium encounter."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        waterway = "Sizable river with pond areas.Probably quite good for fishing or swimming." + temp2
    } else if (rand > 75 && rand < 81) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 26) {
            temp2 += " Easy encounter."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 36) {
            temp2 += " Unmarked settlement nearby. " + SettlementRandomize()
        }
        waterway = "Sizable, unmapped river, spanned by bridge.  Q/A roll to discern who built the bridge and for what purpose." + temp2
    } else if (rand > 80 && rand < 86) {
        waterway = "Meandering river with pier where small boats are tied up.Ferryman ? Q/A rolls to determine purpose of boats."
    } else if (rand > 85 && rand < 91) {
        waterway = "This appears to be a drainage channel for a nearby settlement. " + SettlementRandomize()
    } else if (rand > 90 && rand < 96) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 26) {
            temp2 += " Get freaky."
        }
        waterway = "Humanoids or fey (elves? dryads ?) frolicking in the water." + temp2
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 21) {
            temp2 += " Saque!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 41) {
            temp2 += " Clue! " + ClueRandomize()
        }
        waterway = "Shallow brook… what’s that you see there amongst the pebbles ? " + temp2
    }

    return waterway
}

export default WaterwayRandomize
