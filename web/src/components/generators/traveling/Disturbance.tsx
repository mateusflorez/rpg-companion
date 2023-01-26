import MinMaxRandomize from "../shared/MinMaxRandomize"


function Disturbance() {
    const rand = MinMaxRandomize(1, 100)
    let disturbance = ""

    if (rand < 21) {
        disturbance = "Loud Noise!"
    } else if (rand > 20 && rand < 36) {
        disturbance = "Animal (indifferent)!"
    } else if (rand > 35 && rand < 51) {
        disturbance = "Animal (hostile) ! Roll for creature!"
    } else if (rand > 50 && rand < 61) {
        disturbance = "Disturbing dream/vision!"
    } else if (rand > 60 && rand < 81) {
        disturbance = "NPC (curious)!"
    } else if (rand > 80 && rand < 86) {
        disturbance = "Bandit / Thief!"
    } else if (rand > 85 && rand < 91) {
        disturbance = "Monster!"
    } else if (rand === 91) {
        disturbance = "Natural disaster!"
    } else {
        disturbance = "Storm / Weather change!"
    }

    return disturbance
}

export default Disturbance
