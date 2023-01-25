import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import MountainRangeRandomize from "./MountainRangeRandomize"
import SettlementRandomize from "./SettlementRandomize"
import WoodRandomize from "./WoodRandomize"

function LakeRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var lake = ""

    if (rand < 51) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 41) {
            temp2 += " Easy encounter!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 11) {
            temp2 += " NPC!"
        }
        lake = "Medium-sized lake, unmarked on map." + temp2
    } else if (rand > 50 && rand < 56) {
        lake = "Medium sized lake, small settlement somewhere on its shores." + SettlementRandomize()
    } else if (rand > 55 && rand < 61) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Medium encounter!"
        }
        lake = "Smallish lake / pond / watering hole. Q/A to discern whether anything lurks here." + temp2
    } else if (rand > 60 && rand < 66) {
        lake = "Large, unmapped lake, with a waterway running out of it. Could be rideable in a canoe. DC 19 Survival check to craft canoe if trees are nearby."
    } else if (rand > 65 && rand < 71) {
        lake = "Medium sized lake, small settlement somewhere on its shores." + SettlementRandomize()
    } else if (rand > 70 && rand < 76) {
        lake = "Large, unmapped lake, with small mountain range by its shores. " + MountainRangeRandomize()
    } else if (rand > 75 && rand < 81) {
        lake = "Large lake with small woods on its shores. " + WoodRandomize()
    } else if (rand > 80 && rand < 86) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 41) {
            temp2 += " NPC!"
        }
        lake = "Medium-sized lakes with many boats. Q/A rolls to determine more." + temp2
    } else if (rand > 85 && rand < 91) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        lake = "Small lake or pond, serves as a lair for some aquatic creature." + temp2
    } else if (rand > 90 && rand < 96) {
        lake = "Medium-sized lake, fish jumping. DC 15 Survival check to catch a fish."
    } else {
        lake = "Sacred pool of some sort. Magical in nature. Q/A to discern whether any rituals are going on / magic user NPCs nearby."
    }

    return lake
}

export default LakeRandomize
