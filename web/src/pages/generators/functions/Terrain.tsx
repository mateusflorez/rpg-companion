import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"
import Arctic from "./Terrain/Arctic"

function Terrain(param: number) {
    const dices = [100]
    let res = ""

    const randomizedDices: any[] = Randomize(dices)

    switch (param) {
        case 1:
            res = Arctic(randomizedDices)
            break
        case 2:
            res = "🚧 WIP"
            break
        case 3:
            res = "🚧 WIP"
            break
        case 4:
            res = "🚧 WIP"
            break
        case 5:
            res = "🚧 WIP"
            break
        case 6:
            res = "🚧 WIP"
            break
        case 7:
            res = "🚧 WIP"
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Terrain
