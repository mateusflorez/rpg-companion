import Randomize from "./shared/Randomize"

function Answer(param: number) {
    const dices = [20]
    let dice
    let res = ""

    const randomizedDices: any[] = Randomize(dices)

    switch (param) {
        case 1:
            dice = randomizedDices[0] - 6
            break
        case 2:
            dice = randomizedDices[0] - 4
            break
        case 3:
            dice = randomizedDices[0] - 2
            break
        case 4:
            dice = randomizedDices[0]
            break
        case 5:
            dice = randomizedDices[0] + 2
            break
        case 6:
            dice = randomizedDices[0] + 4
            break
        case 7:
            dice = randomizedDices[0] + 6
            break
        case 8:
            dice = randomizedDices[0]
            break
    }

    if (param === 8) {
        if (dice <= 10) {
            res = "No"
        } else {
            res = "Yes"
        }
    } else if (dice <= 6) {
        res = "No"
    } else if (dice > 6 && dice < 13) {
        res = "Maybe"
    } else {
        res = "Yes"
    }



    return res;
}

export default Answer
