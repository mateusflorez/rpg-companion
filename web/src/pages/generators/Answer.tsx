function Answer() {
    //Set dice
    const dices = [20]

    //variables
    var cont = 0
    const rndInt: any[] = []

    //Randomize
    dices.map((dice: number) => {
        randomize(dice)
    })
    function randomize(dice: number) {
        rndInt[cont] = Math.floor(Math.random() * dice) + 1
        cont++
    }

    //Randomize with min and max numbers
    function minMaxRandomize(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    const dice = rndInt[0]
    let res = ""

    if (dice <= 6) {
        res = "No"
    } else if (dice > 6 && dice < 13) {
        res = "Maybe"
    } else {
        res = "Yes"
    }

    if (!localStorage.getItem("history")) {
        localStorage.setItem("history", "[]")
    }

    const history = localStorage.getItem("history")
    let newHistory = []
    if (history && history !== "")
        newHistory = JSON.parse(history)
    else
        newHistory = []
    if (newHistory.length === 0) {
        newHistory.push(JSON.stringify(res))
    } else {
        newHistory.push(JSON.stringify("|" + res))
    }

    return (
        localStorage.setItem("history", JSON.stringify(newHistory))
    )
}

export default Answer
