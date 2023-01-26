import MinMaxRandomize from "../shared/MinMaxRandomize"
import Randomize from "../shared/Randomize"


function Settlement() {
    const dices = [100, 100, 100]
    let settlement = ""
    let population

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[1] < 21) {
        if (randomizedDices[0] === 1) {
            if (randomizedDices[2] < 26) {
                settlement = "Abandoned large camp / caravan!"
            } else {
                population = MinMaxRandomize(1, 20)
                settlement = "Large camp / caravan! Population: " + population
            }
        } else if (randomizedDices[0] === 2) {
            population = MinMaxRandomize(1, 10)
            settlement = "Cottage! Population: " + population
        } else if (randomizedDices[0] === 3) {
            population = MinMaxRandomize(50, 100)
            settlement = "Large encampment! Population: " + population
        } else if (randomizedDices[0] === 4) {
            population = MinMaxRandomize(50, 150)
            settlement = "Hamlet! Population: " + population
        } else if (randomizedDices[0] === 5) {
            population = MinMaxRandomize(50, 200)
            settlement = "Work crew! Population: " + population
        } else if (randomizedDices[0] === 6) {
            population = MinMaxRandomize(100, 300)
            settlement = "Stationed garrison! Population: " + population
        } else if (randomizedDices[0] === 7) {
            population = MinMaxRandomize(200, 400)
            settlement = "Fort! Population: " + population
        } else if (randomizedDices[0] === 8) {
            population = MinMaxRandomize(300, 1000)
            settlement = "Village! Population: " + population
        } else if (randomizedDices[0] === 9) {
            population = MinMaxRandomize(1000, 3000)
            settlement = "Encamped Army! Population: " + population
        } else {
            population = MinMaxRandomize(500, 5000)
            settlement = "Refugee encampment! Population: " + population
        }
    } else {
        settlement = "Nothing found!"
    }


    return settlement
}

export default Settlement
