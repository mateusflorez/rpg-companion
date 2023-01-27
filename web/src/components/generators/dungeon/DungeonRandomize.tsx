import MinMaxRandomize from "../shared/MinMaxRandomize"
import Randomize from "../shared/Randomize"


function DungeonRandomize() {
    const dices = [20, 10]
    let size = ""
    let rooms
    let type = ""
    let dungeon = ""

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[0] < 4) {
        size = "Tiny"
        rooms = MinMaxRandomize(1, 4) + 2
    } else if (randomizedDices[0] > 3 && randomizedDices[0] < 9) {
        size = "Small"
        rooms = MinMaxRandomize(1, 6) + 4
    } else if (randomizedDices[0] > 8 && randomizedDices[0] < 17) {
        size = "Medium"
        rooms = MinMaxRandomize(4, 16) + 6
    } else if (randomizedDices[0] > 16 && randomizedDices[0] < 19) {
        size = "Large"
        rooms = MinMaxRandomize(5, 30) + 12
    } else if (randomizedDices[0] === 19) {
        size = "Huge"
        rooms = MinMaxRandomize(10, 60) + 24
    } else {
        size = "Limitless"
    }

    if (randomizedDices[1] === 1) {
        type = "Lair"
    } else if (randomizedDices[1] === 2) {
        type = "Tomb / Crypt"
    } else if (randomizedDices[1] === 3) {
        type = "Abandoned stronghold"
    } else if (randomizedDices[1] === 4) {
        type = "Temple or shrine"
    } else if (randomizedDices[1] === 5) {
        type = "Natural caves"
    } else if (randomizedDices[1] === 6) {
        type = "Maze"
    } else if (randomizedDices[1] === 7) {
        type = "Mine"
    } else if (randomizedDices[1] === 8) {
        type = "Planar Gate"
    } else if (randomizedDices[1] === 9) {
        type = "Guild / cult headquarters"
    } else {
        type = "Death Trap"
    }

    if (rooms != undefined) {
        dungeon = type + " " + size + ". " + rooms + " rooms"
    } else {
        dungeon = type + " " + size + "."
    }

    return dungeon
}

export default DungeonRandomize
