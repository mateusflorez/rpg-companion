import SaveOnHistory from "./shared/SaveOnHistory"
import Climate from "./traveling/Climate"
import Disturbance from "./traveling/Disturbance"
import Encounter from "./traveling/Encounter"
import Settlement from "./traveling/Settlement"

function Traveling(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = Climate()
            break
        case 2:
            res = Encounter()
            break
        case 3:
            res = Settlement()
            break
        case 4:
            res = Disturbance()
            break
    }

    return res
}

export default Traveling
