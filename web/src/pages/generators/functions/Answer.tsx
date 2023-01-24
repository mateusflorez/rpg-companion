import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Answer() {
    const dices = [20]

    const rndInt: any[] = Randomize(dices)

    const dice = rndInt[0]
    let res = ""

    if (dice <= 6) {
        res = "No"
    } else if (dice > 6 && dice < 13) {
        res = "Maybe"
    } else {
        res = "Yes"
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Answer
