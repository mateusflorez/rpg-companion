import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"
import ActiveArea from "./terrain/ActiveArea"
import Arctic from "./terrain/Arctic"
import Coast from "./terrain/Coastal"
import Desert from "./terrain/Desert"
import Forest from "./terrain/Forest"
import Grassland from "./terrain/Grassland"
import Mountain from "./terrain/Mountain"

function Terrain(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = Arctic()
            break
        case 2:
            res = Coast()
            break
        case 3:
            res = Desert()
            break
        case 4:
            res = Forest()
            break
        case 5:
            res = Grassland()
            break
        case 6:
            res = Mountain()
            break
        case 7:
            res = ActiveArea()
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Terrain
