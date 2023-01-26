import MinMaxRandomize from "../../shared/MinMaxRandomize"


function EconomicStatusRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let economicStatus = ""

    if (rand < 5) {
        economicStatus += "§Economic status: Destitute / homeless.";
    } else if (rand > 4 && rand < 13) {
        economicStatus += "§Economic status: Poor.";
    } else if (rand > 4 && rand < 21) {
        economicStatus += "§Economic status: Just getting by.";
    } else if (rand > 20 && rand < 31) {
        economicStatus += "§Economic status: Can support themselves.";
    } else if (rand > 30 && rand < 41) {
        economicStatus += "§Economic status: Climbing the ladder.";
    } else if (rand > 40 && rand < 53) {
        economicStatus += "§Economic status: Comfortable.";
    } else if (rand > 52 && rand < 63) {
        economicStatus += "§Economic status: Well-off.";
    } else if (rand > 62 && rand < 75) {
        economicStatus += "§Economic status: Rich.";
    } else if (rand > 74 && rand < 89) {
        economicStatus += "§Economic status: Extremely Wealthy.";
    } else {
        economicStatus += "§Economic status: Royalty-level wealth.";
    }

    return economicStatus
}

export default EconomicStatusRandomize
