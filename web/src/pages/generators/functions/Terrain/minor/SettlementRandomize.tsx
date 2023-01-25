import MinMaxRandomize from "../../shared/MinMaxRandomize"

function SettlementRandomize() {
    const rand = MinMaxRandomize(1, 100)

    var settlement = ""
    var temp2 = ""
    if (rand < 53) {
        settlement = "Hamlet. Q/A rolls to find out more."
    } else if (rand > 52 && rand < 57) {
        settlement = "Nomadic camp."
    } else if (rand > 56 && rand < 61) {
        settlement = "Abandoned Hamlet. Q/A rolls to discern cause of abandonment and also how long ago it was abandoned."
    } else if (rand > 60 && rand < 64) {
        settlement = "Tower. Appears uninhabited. Q/A to discern whether anything lurks here."
    } else if (rand > 63 && rand < 68) {
        settlement = "Tower. Appears inhabited. Q/A rolls to discern more."
    } else if (rand > 67 && rand < 72) {
        settlement = "Worker’s camp."
    } else if (rand > 71 && rand < 75) {
        settlement = "Hamlet, inhabited. Settlement founded on surrounding industry."
    } else if (rand > 74 && rand < 79) {
        settlement = "Hamlet, but some sort of affliction on the inhabitants. Q/A rolls to discern more."
    } else if (rand > 78 && rand < 83) {
        settlement = "Unmapped village, inhabited. Settlement founded on surrounding industry."
    } else if (rand > 82 && rand < 87) {
        settlement = "Village, but in discord / strife. Q/A rolls to discern more."
    } else if (rand > 86 && rand < 91) {
        settlement = "Hidden town / humanoid colony. A good amount of inhabitants. How have they remained hidden, and why ? Q/A rolls to discern more."
    } else if (rand > 90 && rand < 95) {
        settlement = "Tree hut village."
    } else {
        let temp1 = MinMaxRandomize(1, 6)
        let temp3 = ""
        if (temp1 === 1) {
            temp2 += "Town is here magically."
        } else if (temp1 === 2) {
            temp2 += "Result of a dimensional rift."
        } else if (temp1 === 3) {
            temp2 += "Town is illusory but inhabitants still interact with you."
        } else if (temp1 === 4) {
            temp2 += "Floating town, suspended by magic."
        } else {
            temp2 += "Town is a haven for undead."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            temp3 += " Hard encounter."
        }
        settlement = temp2 + "  Q/A rolls to discern more." + temp3
    }

    return settlement
}

export default SettlementRandomize
