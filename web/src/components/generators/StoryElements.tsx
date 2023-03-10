import RandomNpc from "./npcs/RandomNpc"
import SaveOnHistory from "./shared/SaveOnHistory"
import Creature from "./storyElement/Creature"
import ElementRandomize from "./storyElement/ElementRandomize"
import Situation from "./storyElement/Situation"
import UrbanEvent from "./storyElement/UrbanEvent"
import WildernessEvent from "./storyElement/WildernessEvent"

function StoryElements(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = ElementRandomize()
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

    return res
}

export default StoryElements
