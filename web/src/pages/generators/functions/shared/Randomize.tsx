function Randomize(dices: any[]) {
    var cont = 0
    const rndInt: any[] = []

    dices.map((dice: number) => {
        randomize(dice)
    })
    function randomize(dice: number) {
        rndInt[cont] = Math.floor(Math.random() * dice) + 1
        cont++
    }

    return rndInt
}

export default Randomize
