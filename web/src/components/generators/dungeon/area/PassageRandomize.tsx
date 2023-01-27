import MinMaxRandomize from "../../shared/MinMaxRandomize"
import Randomize from "../../shared/Randomize"
import ArchitectureRandomize from "./ArchitectureRandomize"
import ClueRandomize from "./ClueRandomize"
import DoorRandomize from "./DoorRandomize"
import RoomRandomize from "./RoomRandomize"
import SecretDoorRandomize from "./SecretDoorRandomize"
import StairRandomize from "./StairRandomize"
import TrapRandomize from "./TrapRandomize"


function PassageRandomize() {
    const dices = [20, 100]
    let passage = ""
    let passageContent = ""

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[1] < 70) {
        passageContent = " Empty passage."
    } else if (randomizedDices[1] > 69 && randomizedDices[1] < 81) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 11) {
            temp2 = " Clue! Perception check DC 10 to find. " + ClueRandomize()
        }
        passageContent = " Empty passage apart from rubble." + temp2
    } else if (randomizedDices[1] > 80 && randomizedDices[1] < 85) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 21) {
            temp2 = " Clue on body! " + ClueRandomize()
        }
        passageContent = " Empty passage apart from multiple corpses." + temp2
    } else if (randomizedDices[1] > 84 && randomizedDices[1] < 89) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 41) {
            temp2 = " Clue on a body! " + ClueRandomize()
        }
        passageContent = " Empty passage apart from multiple corpses." + temp2
    } else if (randomizedDices[1] > 88 && randomizedDices[1] < 91) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        var temp3 = ""
        if (temp1 < 16) {
            temp2 = " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 16) {
            temp3 = " Clue! " + ClueRandomize()
        }
        passageContent = " Empty passage apart from enemies. Level-appropriate easy encounter." + temp2 + temp3
    } else if (randomizedDices[1] > 90 && randomizedDices[1] < 93) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        var temp3 = ""
        if (temp1 < 26) {
            temp2 = " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 26) {
            temp3 = " Clue! " + ClueRandomize()
        }
        passageContent = " Empty passage apart from enemies. Level-appropriate medium encounter." + temp2 + temp3
    } else if (randomizedDices[1] > 92 && randomizedDices[1] < 95) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        var temp3 = ""
        if (temp1 < 51) {
            temp2 = " Loot!"
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            temp3 = " Clue! " + ClueRandomize()
        }
        passageContent = " Empty passage apart from enemies. Level-appropriate hard encounter." + temp2 + temp3
    } else if (randomizedDices[1] > 94 && randomizedDices[1] < 99) {
        passageContent = " Trap! " + TrapRandomize()
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 61) {
            passageContent = " Loot!"
        } else {
            passageContent = " Empty passage."
        }
    }

    if (randomizedDices[0] === 1) {
        passage = "Passage. Passage continues " + MinMaxRandomize(1, 4) * 10 + " ft." + passageContent
    } else if (randomizedDices[0] === 2) {
        passage = "Passage. Passage goes 15 ft and ends at door. " + passageContent + RoomRandomize()
    } else if (randomizedDices[0] === 3) {
        passage = "Passage. Passage goes 30 ft and ends in stairs. " + passageContent + StairRandomize()
    } else if (randomizedDices[0] === 4) {
        passage = "Passage. Passage turns left 90 degrees." + passageContent
    } else if (randomizedDices[0] === 5) {
        passage = "Passage. Passage turns right 90 degrees." + passageContent
    } else if (randomizedDices[0] === 6) {
        passage = "Passage dead ends. Return to last feature you want to explore." + passageContent
    } else if (randomizedDices[0] === 7) {
        passage = "Passage. Passage continues " + MinMaxRandomize(1, 4) * 10 + " ft and comes to a four way intersection." + passageContent
    } else if (randomizedDices[0] === 8) {
        passage = "Passage. Passage continues " + MinMaxRandomize(1, 4) * 10 + " ft and comes to a T-junction." + passageContent
    } else if (randomizedDices[0] === 9) {
        passage = "Passage. Passage continues " + MinMaxRandomize(1, 6) * 10 + " ft and then you see a side passage leading off to the left." + passageContent
    } else if (randomizedDices[0] === 10) {
        passage = "Passage. Passage continues " + MinMaxRandomize(1, 6) * 10 + " ft and then you see a side passage leading off to the right." + passageContent
    } else if (randomizedDices[0] === 11) {
        passage = "Passage. Passage ends in an open entrance to a room. " + passageContent + RoomRandomize()
    } else if (randomizedDices[0] === 12) {
        passage = "Passage. Door in right wall. " + passageContent + DoorRandomize()
    } else if (randomizedDices[0] === 13) {
        passage = "Passage. Door in left wall. " + passageContent + DoorRandomize()
    } else if (randomizedDices[0] === 14) {
        passage = "Passage. Secret door on passage wall (player's choice which wall). Roll perception DC 15. If successful, go to Secret Door.If not, roll again, continuing along(as your PCs didn't notice.). " + passageContent + SecretDoorRandomize()
    } else if (randomizedDices[0] === 15) {
        passage = "Passage. Narrow passage " + (MinMaxRandomize(1, 6) / 2) * 10 + " ft." + passageContent
    } else if (randomizedDices[0] === 16) {
        passage = "Passage. Wide passage " + (MinMaxRandomize(1, 6) / 2) * 10 + " ft." + passageContent
    } else if (randomizedDices[0] === 17) {
        passage = "Passage. Opening to the left, stairs. " + passageContent + StairRandomize()
    } else if (randomizedDices[0] === 18) {
        passage = "Passage. Opening to the right, stairs. " + passageContent + StairRandomize()
    } else if (randomizedDices[0] === 19) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp = ""
        if (temp1 < 51) {
            randomizedDices[0] = MinMaxRandomize(1, 100)
            temp += "passage. " + passageContent + PassageRandomize()
        } else {
            temp += "room. " + passageContent + RoomRandomize()
        }
        passage = "Passage. Opening in the floor, straight drop down " + MinMaxRandomize(1, 10) * 10 + " to a " + temp
    } else {
        passage = "Passage. There's an architecture on the passage. " + passageContent + ArchitectureRandomize()
    }

    return passage
}

export default PassageRandomize
