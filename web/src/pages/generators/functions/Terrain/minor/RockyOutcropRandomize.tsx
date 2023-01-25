import MinMaxRandomize from "../../shared/MinMaxRandomize"
import LakeRandomize from "./LakeRandomize"
import MonumentRandomize from "./MonumentRandomize"
import StructureRandomize from "./StructureRandomize"
import WoodRandomize from "./WoodRandomize"

function RockyOutcropRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var rockyoutcrop = ""

    if (rand < 53) {
        rockyoutcrop = "Rocky outcrop. Protruding above overarching terrain."
    } else if (rand > 52 && rand < 59) {
        rockyoutcrop = "Outcrop serves as a vantage point for humanoid scouts. DC 14 perception roll to see if your PC notices. Q/A to discern more."
    } else if (rand > 58 && rand < 66) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Structure! " + StructureRandomize()
        } else {
            temp2 += " Monument! " + MonumentRandomize()
        }
        rockyoutcrop = "If scaled, PC might find a structure or monument on top of this feature." + temp2
    } else if (rand > 65 && rand < 72) {
        rockyoutcrop = "Small wood atop this outcrop. " + WoodRandomize()
    } else if (rand > 71 && rand < 78) {
        rockyoutcrop = "Rocky outcrop is actually an island in the middle of a lake. " + LakeRandomize()
    } else if (rand > 77 && rand < 84) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Medium encounter!"
        }
        rockyoutcrop = "Rocky outcrop is actually an assortment of large boulders scattered around. Q/A to determine more. How did they get here? " + temp2
    } else if (rand > 83 && rand < 90) {
        rockyoutcrop = "Interesting formation of standing stones atop the outcrop. DC 12 Survival check to scale this feature and investigate further."
    } else if (rand > 89 && rand < 96) {
        rockyoutcrop = "An NPC stands atop this outcrop and is calling out to you, beckoning you to join them up there. Q/A to discern more."
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Worshippers present."
        }
        rockyoutcrop = "Outcrop has been fashioned into the face or form of a well-known god.  Shrine atop the outcrop. Q/A to discern more." + temp2
    }

    return rockyoutcrop
}

export default RockyOutcropRandomize
