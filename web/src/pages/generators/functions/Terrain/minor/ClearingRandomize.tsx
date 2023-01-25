import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import StructureRandomize from "./StructureRandomize"

function ClearingRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var clearing = ""

    if (rand < 53) {
        clearing = "Natural clearing, devoid of trees. Is something watching you from the trees? Q/A roll. Do you notice it?"
    } else if (rand > 52 && rand < 59) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 21) {
            temp2 = " Clue! " + ClueRandomize()
        }
        clearing = "Druid circle containing standing stones. Q/A roll to see what you can discern." + temp2
    } else if (rand > 58 && rand < 66) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 41) {
            temp2 += " Clue! " + ClueRandomize()
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 11) {
            temp2 += " Medium encounter!"
        }
        clearing = "Totems and other sinister symbols, possibly dark rituals take place here." + temp2
    } else if (rand > 65 && rand < 72) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 21) {
            temp2 += " Easy encounter(beast).If left alone it will probably just take a drink and leave."
        }
        clearing = "Clearing contains a pond, watering hole for local wildlife." + temp2
    } else if (rand > 71 && rand < 78) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 41) {
            temp2 += " Clue! " + ClueRandomize()
        }
        clearing = "Abandoned campsite. Q/A rolls, investigation rolls to find out more." + temp2
    } else if (rand > 77 && rand < 84) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Friendly!"
        } else {
            temp2 += " Hostile!"
        }
        clearing = "Active campsite. Perception check, DC 8, to determine whether you hear the inhabitants before seeing them." + temp2
    } else if (rand > 83 && rand < 90) {
        clearing = "Magic at work here - some sort of dimensional rift? Q/A rolls to see what's happening here!"
    } else if (rand > 89 && rand < 96) {
        clearing = "Structure present in the clearing. " + StructureRandomize()
    } else if (rand > 95 && rand < 99) {
        clearing = "Treant meeting currently in progress. Q/A / Charisma rolls to interact?"
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Friendly!"
        } else {
            temp2 += " Hostile!"
        }
        clearing = "Magical glade. A mage or some other magic user(or fey creatures) has a residence here." + temp2 + " Q/A rolls to determine interaction.Perhaps they have a quest for you!"
    }

    return clearing
}

export default ClearingRandomize
