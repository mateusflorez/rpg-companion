import MinMaxRandomize from "../../shared/MinMaxRandomize"
import SettlementRandomize from "./SettlementRandomize"

function ClearFelledRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var felled = ""

    if (rand < 51) {
        felled = "Clear felled area. Large section of forest removed for local industry."
    } else if (rand > 50 && rand < 61) {
        felled = "Army cutting down trees to build siege weapons."
    } else if (rand > 60 && rand < 71) {
        felled = "This clear area is the result of a forest fire, not active clearfelling. DC 12 nature check to discern cause. Q/A rolls to determine cause."
    } else if (rand > 70 && rand < 81) {
        felled = "Clear felled area contains an unmarked settlement. " + SettlementRandomize()
    } else if (rand > 80 && rand < 91) {
        felled = "Area being clear felled presently. Contracted by nearby large settlement. Q/A to find out more."
    } else {
        felled = "Area being clear felled presently. Timber will go to building new Unmarked Settlement. " + SettlementRandomize() + ". Workers camp nearby."
    }

    return felled
}

export default ClearFelledRandomize
