import MinMaxRandomize from "../shared/MinMaxRandomize"
import GullyRandomize from "./minor/GullyRandomize"
import HillRandomize from "./minor/HillRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"
import WaterwayRandomize from "./minor/WaterwayRandomize"
import WoodRandomize from "./minor/WoodRandomize"

function Coastal() {
    let res = ""
    const rand = MinMaxRandomize(1, 100)

    if (rand < 61) {
        res = "Continuing coastal terrain."
    } else if (rand > 60 && rand < 66) {
        res = "Hills. " + HillRandomize()
    } else if (rand > 65 && rand < 71) {
        res = "Gully. " + GullyRandomize()
    } else if (rand > 70 && rand < 76) {
        res = "Waterway. " + WaterwayRandomize()
    } else if (rand > 75 && rand < 81) {
        res = "Small Wood. " + WoodRandomize()
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

export default Coastal
