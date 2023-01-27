import MinMaxRandomize from "../../shared/MinMaxRandomize"
import PassageRandomize from "./PassageRandomize"
import RoomRandomize from "./RoomRandomize"
import TrapRandomize from "./TrapRandomize"


function SecretDoorRandomize() {
    const rand = MinMaxRandomize(1, 6)
    let secretDoor = ""

    if (rand < 3) {
        secretDoor = "Secret door opens into a room. " + RoomRandomize()
    } else if (rand > 2 && rand < 5) {
        secretDoor = "Secret door opens onto passage." + PassageRandomize()
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 51) {
            temp += "passage. " + PassageRandomize()
        } else {
            temp += "room. " + RoomRandomize()
        }
        secretDoor = "Trapped secret door. " + TrapRandomize() + ". Opens onto " + temp
    }

    return secretDoor
}

export default SecretDoorRandomize
