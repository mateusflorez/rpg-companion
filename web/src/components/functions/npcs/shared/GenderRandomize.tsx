import MinMaxRandomize from "../../shared/MinMaxRandomize"


function GenderRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let gender = ""

    if (rand < 51) {
        gender += "male.§"
    } else {
        gender += "female.§"
    }

    return gender
}

export default GenderRandomize
