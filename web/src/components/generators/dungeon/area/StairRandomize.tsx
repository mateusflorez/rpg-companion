import MinMaxRandomize from "../../shared/MinMaxRandomize"
import Randomize from "../../shared/Randomize"
import PassageRandomize from "./PassageRandomize"
import RoomRandomize from "./RoomRandomize"


function StairRandomize() {
    const dices = [20, 100]
    let stair = ""

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[0] < 9) {
        let temp1 = MinMaxRandomize(1, 4)
        var temp2 = ""
        if (temp1 < 3) {
            temp2 = "passage. " + PassageRandomize()
        } else {
            temp2 = "room. " + RoomRandomize()
        }
        stair = "Stair. Down one level to a " + temp2
    } else if (randomizedDices[0] === 9) {
        stair = "Stair. Down one level to a room. " + RoomRandomize()
    } else if (randomizedDices[0] === 10) {
        stair = "Stair. Down one level to a room. " + RoomRandomize()
    } else if (randomizedDices[0] === 11) {
        stair = "Stair. Down one level to a passage. " + PassageRandomize()
    } else if (randomizedDices[0] === 12) {
        stair = "Stair. Down one level to a passage. " + PassageRandomize()
    } else if (randomizedDices[0] === 13) {
        stair = "Stair. Down one level to a passage. " + PassageRandomize()
    } else if (randomizedDices[0] === 14) {
        let temp1 = MinMaxRandomize(1, 4)
        var temp2 = ""
        if (temp1 < 3) {
            temp2 = "passage. " + PassageRandomize()
        } else {
            temp2 = "room. " + RoomRandomize()
        }
        stair = "Stair. Down two levels to a " + temp2
    } else if (randomizedDices[0] === 15) {
        stair = "Stair. Up one level to a room. " + RoomRandomize()
    } else if (randomizedDices[0] === 16) {
        stair = "Stair. Up one level to a room. " + RoomRandomize()
    } else if (randomizedDices[0] === 17) {
        stair = "Stair. Up one level to a passage. " + PassageRandomize()
    } else if (randomizedDices[0] === 18) {
        stair = "Stair. Up one level to a passage. " + PassageRandomize()
    } else if (randomizedDices[0] === 19) {
        stair = "Stair. Up one level to a passage. " + PassageRandomize()
    } else {
        let temp1 = MinMaxRandomize(1, 4)
        var temp2 = ""
        if (temp1 < 3) {
            temp2 = "passage. " + PassageRandomize()
        } else {
            temp2 = "room. " + RoomRandomize()
        }
        stair = "Stair. Up two levels to a " + temp2
    }

    return stair
}

export default StairRandomize
