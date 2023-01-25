import GullyRandomize from "./minor/GullyRandomize"
import HillRandomize from "./minor/HillRandomize"
import LakeRandomize from "./minor/LakeRandomize"
import LandscapeRandomize from "./minor/LandscapeRandomize"
import MinorSwampRandomize from "./minor/MinorSwampRandomize"
import MountainRangeRandomize from "./minor/MountainRangeRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"
import WaterwayRandomize from "./minor/WaterwayRandomize"
import WoodRandomize from "./minor/WoodRandomize"

function Grassland(dices: any[]) {
    let res = ""

    if (dices[0] < 57) {
        res = "Continuing grassland."
    } else if (dices[0] > 56 && dices[0] < 61) {
        res = "Hills. " + HillRandomize()
    } else if (dices[0] > 60 && dices[0] < 65) {
        res = "Swamp. " + MinorSwampRandomize()
    } else if (dices[0] > 64 && dices[0] < 69) {
        res = "Gully. " + GullyRandomize()
    } else if (dices[0] > 68 && dices[0] < 73) {
        res = "Waterway. " + WaterwayRandomize()
    } else if (dices[0] > 72 && dices[0] < 77) {
        res = "Lake. " + LakeRandomize()
    } else if (dices[0] > 76 && dices[0] < 81) {
        res = "Small Wood. " + WoodRandomize()
    } else if (dices[0] > 80 && dices[0] < 85) {
        res = "Rocky outcrop. " + RockyOutcropRandomize()
    } else if (dices[0] > 84 && dices[0] < 89) {
        res = "Small mountain range / Foothills. " + MountainRangeRandomize()
    } else if (dices[0] > 88 && dices[0] < 93) {
        res = "Unmarked Settlement. " + SettlementRandomize()
    } else if (dices[0] > 92 && dices[0] < 97) {
        res = "!!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!"
    } else {
        res = "Interesting landscape feature. " + LandscapeRandomize()
    }

    return res
}

export default Grassland
