import MinMaxRandomize from "../../shared/MinMaxRandomize"


function AdventurerClassRandomize() {
    let rand = MinMaxRandomize(1, 12)
    let adventurerClass = ""

    if (rand === 1) {
        adventurerClass += "Barbarian, "
    } else if (rand === 2) {
        adventurerClass += "Bard, "
    } else if (rand === 3) {
        adventurerClass += "Cleric, "
    } else if (rand === 4) {
        adventurerClass += "Druid, "
    } else if (rand === 5) {
        adventurerClass += "Fighter, "
    } else if (rand === 6) {
        adventurerClass += "Monk, "
    } else if (rand === 7) {
        adventurerClass += "Paladin, "
    } else if (rand === 8) {
        adventurerClass += "Ranger, "
    } else if (rand === 9) {
        adventurerClass += "Rogue, "
    } else if (rand === 10) {
        adventurerClass += "Sorcerer, "
    } else if (rand === 11) {
        adventurerClass += "Warlock, "
    } else {
        adventurerClass += "Wizard, "
    }

    rand = MinMaxRandomize(1, 20)
    if (rand < 15) {
        rand = MinMaxRandomize(1, 20)
        if (rand < 7) {
            adventurerClass += "level 1."
        } else if (rand < 6 && rand < 12) {
            adventurerClass += "level 2."
        } else if (rand < 11 && rand < 16) {
            adventurerClass += "level 3."
        } else if (rand < 15 && rand < 19) {
            adventurerClass += "level 4."
        } else {
            adventurerClass += "level 5."
        }
    } else if (rand < 14 && rand < 19) {
        rand = MinMaxRandomize(1, 20)
        if (rand < 4) {
            adventurerClass += "level 5."
        } else if (rand < 3 && rand < 7) {
            adventurerClass += "level 6."
        } else if (rand < 6 && rand < 9) {
            adventurerClass += "level 7."
        } else if (rand < 8 && rand < 11) {
            adventurerClass += "level 8."
        } else if (rand < 10 && rand < 13) {
            adventurerClass += "level 9."
        } else if (rand < 12 && rand < 15) {
            adventurerClass += "level 10."
        } else if (rand < 14 && rand < 17) {
            adventurerClass += "level 11."
        } else if (rand === 17) {
            adventurerClass += "level 12."
        } else if (rand === 18) {
            adventurerClass += "level 13."
        } else if (rand === 19) {
            adventurerClass += "level 14."
        } else {
            adventurerClass += "level 15."
        }
    } else {
        rand = MinMaxRandomize(1, 20)
        if (rand < 7) {
            adventurerClass += "level 16."
        } else if (rand < 6 && rand < 12) {
            adventurerClass += "level 17."
        } else if (rand < 11 && rand < 16) {
            adventurerClass += "level 18."
        } else if (rand < 15 && rand < 19) {
            adventurerClass += "level 19."
        } else {
            adventurerClass += "level 20."
        }
    }

    return adventurerClass
}

export default AdventurerClassRandomize
