import MinMaxRandomize from "../shared/MinMaxRandomize"


function MerchantRandomize() {
    var rand = MinMaxRandomize(1, 10)
    let merchant = ""

    if (rand === 1 || rand === 8) {
        merchant += "Gnome,"
    } else if (rand === 2 || rand === 7) {
        merchant += "Halfling,"
    } else if (rand === 3) {
        merchant += "Dwarf,"
    } else if (rand === 4) {
        merchant += "Tiefling,"
    } else if (rand === 5 || rand === 6) {
        merchant += "Human,"
    } else {
        merchant += "Orc or Half-Orc,"
    }

    rand = MinMaxRandomize(1, 10)
    if (rand < 6) {
        merchant += " female,"
    } else {
        merchant += " male,"
    }

    rand = MinMaxRandomize(1, 10)
    if (rand === 1) {
        merchant += " Unfriendly customer service."
    } else if (rand === 2 || rand === 3) {
        merchant += " Neutral customer service."
    } else if (rand === 4 || rand === 5) {
        merchant += " Civil customer service."
    } else if (rand === 6 || rand === 7) {
        merchant += " Cordial customer service."
    } else if (rand === 8 || rand === 9) {
        merchant += " Warm & Welcoming customer service."
    } else {
        merchant += " Treats you like a monarch!"
    }

    return merchant
}

export default MerchantRandomize
