import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"
import ActiveArea from "./Terrain/ActiveArea"
import Arctic from "./Terrain/Arctic"
import Coast from "./Terrain/Coastal"
import Desert from "./Terrain/Desert"
import Forest from "./Terrain/Forest"
import Grassland from "./Terrain/Grassland"
import Mountain from "./Terrain/Mountain"

function Terrain(param: number) {
    const dices = [100]
    let res = ""

    const randomizedDices: any[] = Randomize(dices)

    switch (param) {
        case 1:
            res = Arctic(randomizedDices)
            break
        case 2:
            res = Coast(randomizedDices)
            break
        case 3:
            res = Desert(randomizedDices)
            break
        case 4:
            res = Forest(randomizedDices)
            break
        case 5:
            res = Grassland(randomizedDices)
            break
        case 6:
            res = Mountain(randomizedDices)
            break
        case 7:
            res = ActiveArea(randomizedDices)
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Terrain
