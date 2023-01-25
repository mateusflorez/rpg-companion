import MountainRangeRandomize from "./minor/MountainRangeRandomize"
import OasisRandomize from "./minor/OasisRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"

function Desert(dices: any[]) {
    let res = ""

    if (dices[0] < 71) {
        res = "Continuing desert."
    } else if (dices[0] > 70 && dices[0] < 76) {
        res = "Oasis. " + OasisRandomize()
    } else if (dices[0] > 75 && dices[0] < 81) {
        res = "Small mountain range (dry). " + MountainRangeRandomize()
    } else if (dices[0] > 80 && dices[0] < 86) {
        res = "Rocky outcrop. " + RockyOutcropRandomize()
    } else if (dices[0] > 85 && dices[0] < 91) {
        res = "Unmarked Settlement. " + SettlementRandomize()
    } else if (dices[0] > 90 && dices[0] < 96) {
        res = "!!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!"
    } else {
        res = "Monster Lair."
    }

    return res
}

export default Desert
