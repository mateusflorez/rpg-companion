import MinMaxRandomize from "../../shared/MinMaxRandomize"
import Randomize from "../../shared/Randomize"
import ClueRandomize from "./ClueRandomize"
import SecretDoorRandomize from "./SecretDoorRandomize"
import TrapRandomize from "./TrapRandomize"


function RoomRandomize() {
    const dices = [20, 100]
    let room = ""

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[0] < 3) {
        let temp1 = MinMaxRandomize(1, 4) * 10
        let temp2 = MinMaxRandomize(1, 4) * 10
        let temp3 = MinMaxRandomize(1, 6)
        room = "Rectangular room, dimensions " + temp1 + " ft x " + temp2 + " ft. " + temp3 + " exits (including the one you entered by)"
    } else if (randomizedDices[0] > 2 && randomizedDices[0] < 5) {
        let temp1 = MinMaxRandomize(1, 4) + 1 * 3
        let temp2 = MinMaxRandomize(1, 4)
        room = "Square room, " + temp1 + " ft on all sides, " + temp2 + " exits."
    } else if (randomizedDices[0] > 4 && randomizedDices[0] < 7) {
        let temp1 = MinMaxRandomize(1, 6) + 1 * 3
        let temp2 = MinMaxRandomize(1, 6)
        room = "Square room, " + temp1 + " ft on all sides, " + temp2 + " exits."
    } else if (randomizedDices[0] > 6 && randomizedDices[0] < 9) {
        let temp1 = MinMaxRandomize(1, 8) + 1 * 3
        let temp2 = MinMaxRandomize(1, 8)
        room = "Square room, " + temp1 + " ft on all sides, " + temp2 + " exits."
    } else if (randomizedDices[0] > 8 && randomizedDices[0] < 11) {
        let temp1 = MinMaxRandomize(1, 6) + 1 * 10
        let temp2 = MinMaxRandomize(1, 6) + 2 * 10
        let temp3 = MinMaxRandomize(1, 6)
        room = "Rectangular room, dimensions " + temp1 + " ft x " + temp2 + " ft. " + temp3 + " exits (including the one you entered by)."
    } else if (randomizedDices[0] > 10 && randomizedDices[0] < 13) {
        let temp1 = MinMaxRandomize(1, 4) * 10
        let temp2 = MinMaxRandomize(1, 4)
        room = "Circular room, " + temp1 + " ft on all sides, " + temp2 + " exits."
    } else if (randomizedDices[0] === 15) {
        let temp1 = MinMaxRandomize(1, 6) * 10
        let temp2 = MinMaxRandomize(1, 4)
        room = "Triangular room, " + temp1 + " ft down one side, other sides whatever shape fits best, " + temp2 + " exits."
    } else if (randomizedDices[0] === 16) {
        let temp1 = MinMaxRandomize(1, 4) * 10
        let temp2 = MinMaxRandomize(1, 4)
        room = "Pentagonal room, " + temp1 + " ft across, " + temp2 + " exits."
    } else if (randomizedDices[0] === 17) {
        let temp1 = MinMaxRandomize(1, 6) * 10
        let temp2 = MinMaxRandomize(1, 4)
        room = "Hexagonal room, " + temp1 + " ft across, " + temp2 + " exits."
    } else if (randomizedDices[0] === 18) {
        let temp1 = MinMaxRandomize(1, 6) * 10
        let temp2 = MinMaxRandomize(1, 4)
        room = "Octagonal room, " + temp1 + " ft across, " + temp2 + " exits."
    } else if (randomizedDices[0] === 19) {
        let temp1 = MinMaxRandomize(1, 6) * 10
        room = "Trapezoidal room, " + temp1 + " ft roughly on each side."
    } else {
        let temp1 = MinMaxRandomize(1, 12) * 10
        room = "Rough cave, " + temp1 + " ft width (approx)."
    }

    if (randomizedDices[1] < 5) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 46) {
            temp += " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 76) {
            temp += " Clue! " + ClueRandomize()
        }
        room += " Level appropriate Deadly Encounter." + temp
    } else if (randomizedDices[1] > 4 && randomizedDices[1] < 9) {
        room += " Remnants / proof of the boss or BBEG. It looks as though they have been up to mischief in this room."
    } else if (randomizedDices[1] > 8 && randomizedDices[1] < 13) {
        room += " Low level minions of the BBEG in this room. Level appropriate easy encounter."
    } else if (randomizedDices[1] > 12 && randomizedDices[1] < 21) {
        let temp1 = MinMaxRandomize(1, 6)
        var temp2 = ""
        if (temp1 === 1) {
            temp2 = "Sinkhole."
        } else if (temp1 === 2) {
            temp2 = "Fungus."
        } else if (temp1 === 3) {
            temp2 = "Trap. " + TrapRandomize()
        } else if (temp1 === 4) {
            temp2 = "Collapsing masonry or other natural hazard."
        } else {
            temp2 = "Wandering monster, medium difficulty."
        }
        room += " Dungeon Hazard. " + temp2
    } else if (randomizedDices[1] > 20 && randomizedDices[1] < 33) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 31) {
            temp += " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Secret door! " + SecretDoorRandomize()
        }
        room += " Level appropriate Hard Encounter" + temp
    } else if (randomizedDices[1] > 32 && randomizedDices[1] < 37) {
        room += " NPC in room investigating. Roll again to find out what they are investigating. " + ClueRandomize()
    } else if (randomizedDices[1] > 36 && randomizedDices[1] < 41) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 31) {
            temp += " Enemy alive!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Loot!"
        }
        room += " A previously triggered trap is in this room, with a level appropriate Hard Encounter enemy caught in it / victim to it." + temp
    } else if (randomizedDices[1] > 40 && randomizedDices[1] < 53) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 21) {
            temp += " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 11) {
            temp += " Secret door! " + SecretDoorRandomize()
        }
        room += " Level appropriate Easy Encounter." + temp
    } else if (randomizedDices[1] > 52 && randomizedDices[1] < 57) {
        room += " Obstacle of some sort (e.g. rubble, crevasse, sinkhole, underground stream, wild magic field). Athletics or acrobatics check might be required to pass it, or it might be impassable."
    } else if (randomizedDices[1] > 56 && randomizedDices[1] < 68) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 31) {
            temp += " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 21) {
            temp += " Secret door! " + SecretDoorRandomize()
        }
        room += " Level appropriate Medium Encounter." + temp
    } else if (randomizedDices[1] > 67 && randomizedDices[1] < 72) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 51) {
            temp += " Loot!"
        }
        room += " NPC (enemy or ally of the PC) near death (1d4 levels less than you, minimum Level 1), unconscious, Level appropriate Hard Encounter.Enemy or enemies reduced to 50 % hp. A battle has obviously gone on here - the NPC has fought a powerful creature, and lost, but has damaged it somewhat." + temp
    } else if (randomizedDices[1] > 71 && randomizedDices[1] < 75) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 51) {
            temp += "easy"
        } else {
            temp += "medium"
        }
        room += " Two level appropriate " + temp + " creatures are engaged in battle with each other.You stumble in just as battle starts.How do you react ? Hide and wait until a victor emerges ? What are they fighting over ? Since they are otherwise engaged, you have advantage on stealth checks to creep up. (DC is the creature's passive perception) "
    } else if (randomizedDices[1] > 74 && randomizedDices[1] < 77) {
        room += " Deserted but for some strange runes and symbols on the floor. Magical? Perhaps."
    } else if (randomizedDices[1] > 76 && randomizedDices[1] < 81) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 51) {
            temp += "They tell you to begone, they stake claim to this dungeon and all within it.Will fight if challenged.However, also will agree to split zup and going seperate ways, perhaps."
        } else {
            temp += "Will team up with you for the remainder of this dungeon, and split the loot, and then will depart."
        }
        room += " Strong NPC (2d4 levels higher than your PC) has just defeated a Level Appropriate Deadly Encounter." + temp
    } else if (randomizedDices[1] > 80 && randomizedDices[1] < 85) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 31) {
            temp += " Loot!"
        }
        room += " Empty." + temp
    } else if (randomizedDices[1] > 84 && randomizedDices[1] < 89) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 31) {
            temp += " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp += " Clue! " + ClueRandomize()
        }
        room += " Level appropriate Easy Encounter." + temp
    } else if (randomizedDices[1] > 88 && randomizedDices[1] < 93) {
        room += " Accursed or blessed relic, guarded by level appropriate deadly encounter. Q/A rolls to determine nature of relic."
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        let temp2 = MinMaxRandomize(1, 4)
        var temp = ""
        if (temp1 < 91) {
            temp += " Loot " + temp2 + " times!"
        }
        room += " BOSS / BBEG / Significant NPC Encounter! " + temp
    }

    return room
}

export default RoomRandomize
