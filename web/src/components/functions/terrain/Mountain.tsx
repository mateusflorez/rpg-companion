import MinMaxRandomize from "../shared/MinMaxRandomize"
import GullyRandomize from "./minor/GullyRandomize"
import LakeRandomize from "./minor/LakeRandomize"
import MountainRangeRandomize from "./minor/MountainRangeRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"
import WaterwayRandomize from "./minor/WaterwayRandomize"
import WoodRandomize from "./minor/WoodRandomize"

function Mountain() {
    let res = ""
    const rand = MinMaxRandomize(1, 100)

    if (rand < 56) {
        res = "Continuing mountains.";
    } else if (rand > 55 && rand < 61) {
        res = "Gully. " + GullyRandomize();
    } else if (rand > 60 && rand < 66) {
        res = "Waterway. " + WaterwayRandomize();
    } else if (rand > 65 && rand < 71) {
        res = "Lake. " + LakeRandomize();
    } else if (rand > 70 && rand < 76) {
        res = "Small Wood. " + WoodRandomize();
    } else if (rand > 75 && rand < 81) {
        res = "Rocky outcrop. " + RockyOutcropRandomize();
    } else if (rand > 80 && rand < 86) {
        res = "Small mountain range / Foothills. " + MountainRangeRandomize();
    } else if (rand > 85 && rand < 91) {
        res = "Unmarked Settlement. " + SettlementRandomize();
    } else if (rand > 90 && rand < 96) {
        res = "🚧 !!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!";
    } else {
        res = "Monster Lair.";
    }

    return res
}

export default Mountain
