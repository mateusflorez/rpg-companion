import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize"
import WaterwayRandomize from "./WaterwayRandomize"

function StructureRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var structure = ""
    if (rand < 5) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 11) {
            temp2 += " Inhabited."
        }
        structure = "Mine." + temp2
    } else if (rand > 4 && rand < 9) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 31) {
            temp2 += " Haunted / undead."
        }
        structure = "Cemetery / Tomb." + temp2
    } else if (rand > 8 && rand < 13) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 31) {
            temp2 += " Deserted (with possible monster inhabitants)."
        }
        structure = "Small castle / keep." + temp2
    } else if (rand > 12 && rand < 17) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Inhabited."
        }
        structure = "Manor House." + temp2
    } else if (rand > 16 && rand < 21) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 91) {
            temp2 += " Inhabited."
        }
        structure = "Monastery." + temp2
    } else if (rand > 20 && rand < 25) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Inhabited."
        }
        structure = "Shrine / Temple." + temp2
    } else if (rand > 24 && rand < 29) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Inhabited."
        }
        structure = "Watchtower." + temp2
    } else if (rand > 28 && rand < 33) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 81) {
            temp2 += " Inhabited."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 6) {
            temp2 += " Under attack currently!"
        }
        structure = "Farm House." + temp2
    } else if (rand > 32 && rand < 37) {
        structure = "Fence. Q/A roll / nature roll to determine its purpose."
    } else if (rand > 36 && rand < 41) {
        structure = "Windmill."
    } else if (rand > 40 && rand < 45) {
        structure = "Watermill. " + WaterwayRandomize()
    } else if (rand > 44 && rand < 49) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += " Hidden cave / tunnel at bottom."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 31) {
            temp2 += " Clue! " + ClueRandomize()
        }
        structure = "Old well." + temp2
    } else if (rand > 48 && rand < 53) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 71) {
            temp2 += " Inhabited."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 41) {
            temp2 += " Clue! " + ClueRandomize()
        }
        structure = "Hermit Hut / Cave." + temp2
    } else if (rand > 54 && rand < 57) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 91) {
            temp2 += " Inhabited."
        }
        structure = "Lone tavern / inn.  Q/A to discern more." + temp2
    } else if (rand > 56 && rand < 61) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += "Hunting cabin."
        } else {
            temp2 += "Fishing Hut."
        }
        structure = temp2 + " Might contain basic supplies. Q/A roll to determine."
    } else if (rand > 60 && rand < 65) {
        structure = "Hideout / Bunker. DC 16 perception check to notice. If you are in familiar / favoured terrain, make at advantage."
    } else if (rand > 64 && rand < 69) {
        structure = "Waypoint. Stopoff for couriers / horse trader. Q/A to discern more."
    } else if (rand > 68 && rand < 73) {
        structure = "Training Camp. Q/A to discern more."
    } else if (rand > 72 && rand < 77) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 51) {
            temp2 += "Small bridge."
        } else if (temp1 > 50 && temp1 < 76) {
            temp2 += "Medium bridge."
        } else {
            temp2 += "Large bridge."
        }
        structure = temp2 + " " + WaterwayRandomize()
    } else if (rand > 76 && rand < 81) {
        structure = "Medium Bridge. " + WaterwayRandomize()
    } else if (rand > 80 && rand < 85) {
        structure = "Large Bridge. " + WaterwayRandomize()
    } else if (rand > 84 && rand < 89) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 81) {
            temp2 += " Inhabited."
        } else {
            temp2 += " Inhabited, but not by humans..."
        }
        structure = "Large Castle / Keep." + temp2
    } else if (rand > 88 && rand < 93) {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 11) {
            temp2 += " Mortal encounter."
        } else if (temp1 > 10 && temp1 < 61) {
            temp2 += " Hard encounter."
        }
        temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 61) {
            temp2 += " Clue! " + ClueRandomize()
        }
        structure = "Ruins." + temp2
    } else if (rand > 92 && rand < 97) {
        structure = "Burial Mounds / Barrows. What lies beneath?"
    } else {
        let temp1 = MinMaxRandomize(1, 100)
        var temp2 = ""
        if (temp1 < 81) {
            temp2 += " Friendly."
        }
        structure = "Wizard Tower. Definitely inhabited." + temp2
    }

    return structure
}

export default StructureRandomize
