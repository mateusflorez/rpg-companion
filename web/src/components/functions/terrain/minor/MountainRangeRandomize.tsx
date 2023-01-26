import MinMaxRandomize from "../../shared/MinMaxRandomize"
import LakeRandomize from "./LakeRandomize"
import SettlementRandomize from "./SettlementRandomize"
import WoodRandomize from "./WoodRandomize"

function MountainRangeRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var mountainRange = ""
    if (rand < 56) {
        mountainRange = "Standard small mountain range, mostly uniform size, no huge peaks. DC 16 Survival roll to scale (climbing gear also required)."
    } else if (rand > 55 && rand < 61) {
        mountainRange = "Small mountain range with some large peaks. DC 16 Survival roll to scale (climbing gear also required)."
    } else if (rand > 60 && rand < 66) {
        mountainRange = "Small mountain range that appears to possess a large amount of caves. Caves might lead to tunnels / dungeons."
    } else if (rand > 65 && rand < 71) {
        mountainRange = "Mountain range appears to be home to a colony / settlement of some kind.Dwarven ? Some kind of mountain dwelling creature. " + SettlementRandomize()
    } else if (rand > 70 && rand < 76) {
        mountainRange = "Small mountain range covered by forest. " + WoodRandomize()
    } else if (rand > 75 && rand < 81) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Hard encounter!"
        }
        mountainRange = "Small mountain range, rugged and dangerous, partially wooded. Giant eagles and the like." + temp2
    } else if (rand > 80 && rand < 86) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 71) {
            temp2 += " Hard encounter!"
        }
        mountainRange = "Bandits / Raiders using these mountains as a hideout. But does your PC know ? Perception DC 18 to discern." + temp2
    } else if (rand > 85 && rand < 91) {
        mountainRange = "Small mountain range by lake. " + LakeRandomize()
    } else if (rand > 90 && rand < 96) {
        mountainRange = "Small mountain range with colony of Giants (or perhaps other humanoids)! Q/A rolls to find out more."
    } else {
        let temp1 = MinMaxRandomize(1, 8)
        var temp2 = ""
        if (temp1 === 1) {
            temp2 += "monastery"
        } else if (temp1 === 2) {
            temp2 += "wizard tower"
        } else if (temp1 === 3) {
            temp2 += "hidden town"
        } else if (temp1 === 4) {
            temp2 += "community of druids"
        } else if (temp1 === 5) {
            temp2 += "secret dwarven kingdom"
        } else if (temp1 === 6) {
            temp2 += "secret gnomish kingdom"
        } else {
            temp2 += "citadel for an assassin’s order"
        }
        mountainRange = "Small mountain range containing a " + temp2 + ". Q/A rolls to determine more."
    }

    return mountainRange
}

export default MountainRangeRandomize
