import MinMaxRandomize from "../shared/MinMaxRandomize"


function RumourRandomize() {
    var rand = MinMaxRandomize(1, 4)
    let rumour = ""

    if (rand === 1) {
        rumour += "Person (roll NPC), "
    } else if (rand === 2) {
        rumour += "Creature (roll Creature), "
    } else if (rand === 3) {
        rumour += "Place, "
        rand = MinMaxRandomize(1, 12)
        if (rand === 1) {
            rumour += "In this settlement / area. "
        } else if (rand === 2) {
            rumour += "Just outside settlement. "
        } else if (rand === 3) {
            rumour += MinMaxRandomize(1, 4) + " miles away, in a structure. "
        } else if (rand === 4) {
            rumour += "In the nearest forest. "
        } else if (rand === 5) {
            rumour += "In the nearest hills. "
        } else if (rand === 6) {
            rumour += "In the nearest mountains. "
        } else if (rand === 7) {
            rumour += "In the nearest swamp. "
        } else if (rand === 8) {
            rumour += "In / beside the nearest body of water. "
        } else if (rand === 9) {
            rumour += "In the next village. "
        } else if (rand === 10) {
            rumour += "In the next large town. "
        } else if (rand === 11) {
            rumour += "In the capital of the realm. "
        } else {
            rumour += "In the next realm. "
        }
    } else {
        rumour += "Thing, "
    }
    rumour += "Roll situations for the substance of the rumour."

    return rumour
}

export default RumourRandomize
