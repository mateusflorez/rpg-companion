import Adventurer from "./npcs/Adventurer"
import RandomNpc from "./npcs/RandomNpc"
import Worker from "./npcs/Worker"
import SaveOnHistory from "./shared/SaveOnHistory"

function Npcs(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = RandomNpc()
            break
        case 2:
            res = Worker()
            break
        case 3:
            res = Adventurer()
            break
    }

    return res
}

export default Npcs
