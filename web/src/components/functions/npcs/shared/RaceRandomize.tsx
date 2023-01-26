import MinMaxRandomize from "../../shared/MinMaxRandomize"


function RaceRandomize() {
    let rand = MinMaxRandomize(1, 100)
    let race = ""

    if (rand < 81) {
        race += "Human, "
    } else if (rand > 80 && rand < 88) {
        race += "Halfling, "
    } else if (rand > 87 && rand < 93) {
        race += "Dwarf, "
    } else {
        rand = MinMaxRandomize(1, 20)
        if (rand < 4) {
            race += "Elf, "
        } else if (rand > 3 && rand < 7) {
            race += "Half elf, "
        } else if (rand > 6 && rand < 9) {
            race += "Gnome, "
        } else if (rand > 8 && rand < 11) {
            race += "Orc, "
        } else if (rand === 11) {
            race += "Half Orc, "
        } else if (rand === 12) {
            race += "Goblin, "
        } else if (rand === 13) {
            race += "Drow, "
        } else if (rand === 14) {
            race += "Tabaxi, "
        } else if (rand === 15) {
            race += "Kenku, "
        } else if (rand === 16) {
            race += "Tiefling, "
        } else if (rand === 17) {
            race += "Aasimar, "
        } else if (rand === 18) {
            race += "Dragonborn, "
        } else if (rand === 19) {
            race += "Goliath, "
        } else {
            race += "Aarakocra, "
        }
    }

    return race
}

export default RaceRandomize
