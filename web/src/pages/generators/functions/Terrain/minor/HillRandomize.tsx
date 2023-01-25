import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import MonumentRandomize from "./MonumentRandomize"
import WoodRandomize from "./WoodRandomize"

function HillRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var hill = ""

    if (rand < 51) {
        hill = "Low, rolling hills."
    } else if (rand > 50 && rand < 58) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        hill = "Rocky hills abundant with caves, may also possess a network of natural tunnels." + temp2
    } else if (rand > 57 && rand < 65) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 11) {
            temp2 += " NPC!"
        }
        hill = "Slightly higher hills, giving a good view of the surrounding area." + temp2
    } else if (rand > 64 && rand < 72) {
        hill = "Sharply jutting, rocky hills, practically unclimbable. Athletics check to scale, DC 16. Fall damage if fail?"
    } else if (rand > 71 && rand < 79) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Monument! " + MonumentRandomize()
        }
        hill = "Dry, low plateau." + temp2
    } else if (rand > 78 && rand < 86) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Easy encounter!"
        }
        hill = "Slightly wooded hills, small patches of forest. " + WoodRandomize() + " " + temp2
    } else if (rand > 85 && rand < 93) {
        hill = "Not hills but barrows of some kind, possibly burial mounds! Q/A to determine nature of these mounds.May lead to tunnels."
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += "humans."
        } else {
            temp2 += "burrowing beast."
        }
        hill = "Hills are home to a colony of " + temp2 + " Q/A rolls to determine what lurks here."
    }
    return hill
}

export default HillRandomize
