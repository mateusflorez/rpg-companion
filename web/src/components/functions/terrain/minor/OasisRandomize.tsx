import MinMaxRandomize from "../../shared/MinMaxRandomize"

function OasisRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var oasis = ""

    if (rand < 47) {
        oasis = "Oasis with pool of refreshing water at its centre. Ideal campsite. Good place for a long rest, especially in a desert."
    } else if (rand > 46 && rand < 53) {
        oasis = "On reaching it, you discover it is a mirage. Just deserts."
    } else if (rand > 52 && rand < 59) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 31) {
            temp2 += " poisoned, or something else."
        } else {
            let temp1 = MinMaxRandomize(1, 100)
            if (temp1 < 51) {
                temp2 += "  favourable effect"
            }
        }
        oasis = "Oasis with pool but water is… not quite. Q/A rolls / Nature check to discern more." + temp2
    } else if (rand > 58 && rand < 65) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 91) {
            temp2 += " Friendly."
        }
        oasis = "Oasis contains a traveling caravan of desert merchants. Are you able to approach with stealth so they don't notice you ?" + temp2
    } else if (rand > 64 && rand < 71) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Friendly."
        }
        oasis = "Oasis contains a large camp of desert nomads. Are you able to approach with stealth so they don't notice you ? " + temp2
    } else if (rand > 70 && rand < 77) {
        oasis = "Oasis contains a shrine or temple of some sort. Q/A / Investigation roll to find out more."
    } else if (rand > 76 && rand < 83) {
        oasis = "Oasis contains a ruin of some sort. Q/A / Investigation roll to find out more."
    } else if (rand > 82 && rand < 89) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Friendly."
        }
        oasis = "Oasis with bandits / raiders / other adventurers using it as a stopoff point. Are you able to approach with stealth so they don't notice you ?" + temp2
    } else if (rand > 88 && rand < 95) {
        oasis = "Oasis with a waypoint / fresh horses / supplies. Restock on some basics! Q/A roll to discern more."
    } else {
        oasis = "Some sort of magical barrier here… it could only be described as a Wonderwall. Q/A rolls / Arcana check to discern nature of barrier."
    }

    return oasis
}

export default OasisRandomize
