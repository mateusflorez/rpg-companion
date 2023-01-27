import QuestRandomize from "./quest/QuestRandomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Quest(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = QuestRandomize()
            break
        case 2:
            res = "🚧 WIP"
            break
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Quest
