import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"
import UrbanEvent from "./storyElement/UrbanEvent"
import WildernessEvent from "./storyElement/WildernessEvent"

function StoryElements(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = "🚧WIP"
            break
        case 2:
            res = UrbanEvent()
            break
        case 3:
            res = WildernessEvent()
            break
        case 4:
            res = "🚧WIP"
            break
        case 5:
            res = "🚧WIP"
            break
        case 6:
            res = "🚧WIP"
            break
        case 7:
            res = "🚧WIP"
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default StoryElements
