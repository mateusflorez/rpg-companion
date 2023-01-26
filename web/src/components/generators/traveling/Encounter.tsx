import MinMaxRandomize from "../shared/MinMaxRandomize"


function Encounter() {
    const rand = MinMaxRandomize(1, 100)
    let encounter = ""

    if (rand < 26) {
        encounter = "Roll an encounter!"
    } else {
        encounter = "Nothing found!"
    }


    return encounter
}

export default Encounter
