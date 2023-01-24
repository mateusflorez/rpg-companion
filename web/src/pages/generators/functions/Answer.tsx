import Randomize from "./shared/Randomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Answer(param: number) {
    const dices = [20]
    let dice
    let res = ""

    const rndInt: any[] = Randomize(dices)

    switch (param) {
        case 1:
            dice = rndInt[0] - 6;
            break;
        case 2:
            dice = rndInt[0] - 4;
            break;
        case 3:
            dice = rndInt[0] - 2;
            break;
        case 4:
            dice = rndInt[0];
            break;
        case 5:
            dice = rndInt[0] + 2;
            break;
        case 6:
            dice = rndInt[0] + 4;
            break;
        case 7:
            dice = rndInt[0] + 6;
            break;
        case 8:
            dice = rndInt[0];
            break;
    }

    if (param === 8) {
        if (dice <= 10) {
            res = "Não"
        } else {
            res = "Sim"
        }
    } else if (dice <= 6) {
        res = "Não"
    } else if (dice > 6 && dice < 13) {
        res = "Talvez"
    } else {
        res = "Sim"
    }

    const newHistory = SaveOnHistory(res)

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Answer
