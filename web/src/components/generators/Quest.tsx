import QuestRandomize from "./quest/QuestRandomize"
import SourceRandomize from "./quest/SourceRandomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Quest(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = QuestRandomize()
            break
        case 2:
            res = SourceRandomize()
            break
    }

    return res
}

export default Quest
