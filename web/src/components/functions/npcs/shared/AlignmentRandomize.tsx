import MinMaxRandomize from "../../shared/MinMaxRandomize"


function AlignmentRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let alignment = ""

    if (rand < 16) {
        alignment += "Lawful Good.§"
    } else if (rand > 15 && rand < 21) {
        alignment += "Neutral Good.§"
    } else if (rand > 20 && rand < 26) {
        alignment += "Chaotic Good.§"
    } else if (rand > 25 && rand < 31) {
        alignment += "Lawful neutral.§"
    } else if (rand > 30 && rand < 51) {
        alignment += "Neutral.§"
    } else if (rand > 50 && rand < 56) {
        alignment += "Chaotic neutral.§"
    } else if (rand > 55 && rand < 71) {
        alignment += "Lawful Evil.§"
    } else if (rand > 70 && rand < 91) {
        alignment += "Neutral Evil.§"
    } else {
        alignment += "Chaotic Evil.§"
    }

    return alignment
}

export default AlignmentRandomize
