import GullyRandomize from "./minor/GullyRandomize"
import HillRandomize from "./minor/HillRandomize"
import RockyOutcropRandomize from "./minor/RockyOutcropRandomize"
import SettlementRandomize from "./minor/SettlementRandomize"
import WaterwayRandomize from "./minor/WaterwayRandomize"
import WoodRandomize from "./minor/WoodRandomize"

function Coastal(dices: any[]) {
    let res = ""

    if (dices[0] < 61) {
        res = "Continuing coastal terrain.";
    } else if (dices[0] > 60 && dices[0] < 66) {
        res = "Hills. " + HillRandomize();
    } else if (dices[0] > 65 && dices[0] < 71) {
        res = "Gully. " + GullyRandomize();
    } else if (dices[0] > 70 && dices[0] < 76) {
        res = "Waterway. " + WaterwayRandomize();
    } else if (dices[0] > 75 && dices[0] < 81) {
        res = "Small Wood. " + WoodRandomize();
    } else if (dices[0] > 80 && dices[0] < 86) {
        res = "Rocky outcrop. " + RockyOutcropRandomize();
    } else if (dices[0] > 85 && dices[0] < 91) {
        res = "Unmarked Settlement. " + SettlementRandomize();
    } else if (dices[0] > 90 && dices[0] < 96) {
        res = "!!! D6 roll. 1-2: Structure / 3-4: Monument / 5-6: Interesting landscape feature. !!!";
    } else {
        res = "Monster Lair.";
    }


    return res
}

export default Coastal
