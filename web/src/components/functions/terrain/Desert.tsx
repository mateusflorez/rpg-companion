import MinMaxRandomize from "../shared/MinMaxRandomize"
import MountainRangeRandomize from "./minor/MountainRangeRandomize"
import OasisRandomize from "./minor/OasisRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"

function Desert() {
    let res = ""
    const rand = MinMaxRandomize(1, 100)

    if (rand < 71) {
        res = "Continuing desert."
    } else if (rand > 70 && rand < 76) {
        res = "Oasis. " + OasisRandomize()
    } else if (rand > 75 && rand < 81) {
        res = "Small mountain range (dry). " + MountainRangeRandomize()
    } else if (rand > 80 && rand < 86) {
        res = "Rocky outcrop. " + RockyOutcropRandomize()
    } else if (rand > 85 && rand < 91) {
        res = "Unmarked Settlement. " + SettlementRandomize()
    } else if (rand > 90 && rand < 96) {
        res = "🚧 !!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!"
    } else {
        res = "Monster Lair."
    }

    return res
}

export default Desert
