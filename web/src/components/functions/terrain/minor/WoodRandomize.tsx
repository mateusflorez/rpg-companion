import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"

function WoodRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var wood = ""
    if (rand < 56) {
        wood = "Standard type of wood for this area."
    } else if (rand > 55 && rand < 61) {
        wood = "Trees dead, as if by some mysterious disease. Use Q/A rolls to see if you can determine the nature of the affliction."
    } else if (rand > 60 && rand < 66) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize()
        }
        wood = "Ancient wood, twisted, gnarled trees" + temp2
    } else if (rand > 65 && rand < 71) {
        wood = "Serene, Sylvan wood. Q/A rolls to check for signs of life."
    } else if (rand > 70 && rand < 76) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Hard encounter."
        }
        wood = "Dark, thick wood, full of menace." + temp2
    } else if (rand > 75 && rand < 71) {
        wood = "Wood which is in the process of being clear felled for timber. Q/A rolls to determine who is clear felling and why."
    } else if (rand > 80 && rand < 86) {
        wood = "Wood which has been ravaged by forest fire. Q/A rolls to determine cause of fire."
    } else if (rand > 85 && rand < 91) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 36) {
            temp2 += " Medium encounter."
        }
        wood = "Wood in which a band of raiding humanoids is currently hiding." + temp2
    } else if (rand > 90 && rand < 96) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 11) {
            temp2 += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 26) {
            temp2 += " Medium encounter."
        }
        wood = "Wood containing a clearing containing totem / standing stones" + temp2
    } else {
        wood = "Wood inhabited by humanoid settlement such as elves, gnomes, halflings. Q/A rolls to determine whether you meet them."
    }

    return wood
}

export default WoodRandomize
