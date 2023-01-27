import DungeonRandomize from "./dungeon/DungeonRandomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Dungeon(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = "🚧 WIP"
            break
        case 2:
            res = DungeonRandomize()
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Dungeon
