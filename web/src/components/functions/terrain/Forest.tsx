import MinMaxRandomize from "../shared/MinMaxRandomize"
import ClearFelledRandomize from "./minor/ClearFelledRandomize"
import ClearingRandomize from "./minor/ClearingRandomize"
import GullyRandomize from "./minor/GullyRandomize"
import LakeRandomize from "./minor/LakeRandomize"
import LandscapeRandomize from "./minor/LandscapeRandomize"
import MinorSwampRandomize from "./minor/MinorSwampRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"
import WaterwayRandomize from "./minor/WaterwayRandomize"

function Forest() {
    let res = ""
    const rand = MinMaxRandomize(1, 100)

    if (rand < 53) {
        res = "Continuing forest."
    } else if (rand > 52 && rand < 57) {
        res = "Small clearing. " + ClearingRandomize()
    } else if (rand > 56 && rand < 61) {
        res = "Large clearing. " + ClearingRandomize()
    } else if (rand > 60 && rand < 65) {
        res = "Small wooded gully. " + GullyRandomize()
    } else if (rand > 64 && rand < 69) {
        res = "Large wooded gully. " + GullyRandomize()
    } else if (rand > 68 && rand < 73) {
        res = "Waterway. " + WaterwayRandomize()
    } else if (rand > 72 && rand < 77) {
        res = "Lake. " + LakeRandomize()
    } else if (rand > 76 && rand < 81) {
        res = "Clear felled area. " + ClearFelledRandomize()
    } else if (rand > 80 && rand < 85) {
        res = "Rocky outcrop. " + RockyOutcropRandomize()
    } else if (rand > 84 && rand < 89) {
        res = "Swamp. " + MinorSwampRandomize()
    } else if (rand > 88 && rand < 93) {
        res = "Unmarked Forest Settlement. " + SettlementRandomize()
    } else if (rand > 92 && rand < 97) {
        res = "🚧 !!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!"
    } else {
        res = "Interesting landscape feature. " + LandscapeRandomize()
    }

    return res
}

export default Forest
