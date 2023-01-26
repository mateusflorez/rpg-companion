import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Dices(param: number) {
    const dices = [param]
    let res = ""

    const randomizedDices: any[] = Randomize(dices)

    res = randomizedDices[0]

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Dices
