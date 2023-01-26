import MinMaxRandomize from "../shared/MinMaxRandomize"


function ElementRandomizer() {
    const rand = MinMaxRandomize(1, 20)
    let element = ""

    if (rand < 7) {
        element = "Event";
    } else if (rand > 6 && rand < 9) {
        element = "Creature";
    } else if (rand > 8 && rand < 13) {
        element = "Person";
    } else {
        element = "Situation";
    }

    return element
}

export default ElementRandomizer
