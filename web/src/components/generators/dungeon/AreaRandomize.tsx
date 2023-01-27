import MinMaxRandomize from "../shared/MinMaxRandomize"
import DoorRandomize from "./area/DoorRandomize"
import PassageRandomize from "./area/PassageRandomize"
import RoomRandomize from "./area/RoomRandomize"
import StairRandomize from "./area/StairRandomize"

function AreaRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let area = ""

    if (rand < 3) {
        area = PassageRandomize()
    } else if (rand > 2 && rand < 5) {
        area = RoomRandomize()
    } else if (rand > 4 && rand < 7) {
        area = DoorRandomize()
    } else if (rand > 6 && rand < 9) {
        area = StairRandomize()
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            area = PassageRandomize()
        }
        else {
            area = RoomRandomize()
        }
    }

    return area
}

export default AreaRandomize
