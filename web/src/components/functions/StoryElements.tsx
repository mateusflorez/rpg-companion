import RandomNpc from "./npcs/RandomNpc"
import SaveOnHistory from "./shared/SaveOnHistory"
import Creature from "./storyElement/Creature"
import Situation from "./storyElement/Situation"
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
            res = Creature()
            break
        case 5:
            res = RandomNpc()
            break
        case 6:
            res = Situation()
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default StoryElements
