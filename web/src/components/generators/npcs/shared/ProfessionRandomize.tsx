import MinMaxRandomize from "../../shared/MinMaxRandomize"


function ProfessionRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let profession = ""

    if (rand < 3) {
        profession += "Farmer."
    } else if (rand > 2 && rand < 5) {
        profession += "Artist."
    } else if (rand > 4 && rand < 7) {
        profession += "Herbalist."
    } else if (rand > 6 && rand < 9) {
        profession += "Horse trainer."
    } else if (rand > 8 && rand < 11) {
        profession += "Blacksmith."
    } else if (rand > 10 && rand < 13) {
        profession += "Fine smith."
    } else if (rand > 12 && rand < 15) {
        profession += "Locksmith."
    } else if (rand > 14 && rand < 17) {
        profession += "Jeweller."
    } else if (rand > 16 && rand < 19) {
        profession += "Entertainer."
    } else if (rand > 18 && rand < 21) {
        profession += "Teacher."
    } else if (rand > 20 && rand < 23) {
        profession += "Armourer."
    } else if (rand > 22 && rand < 25) {
        profession += "Cook."
    } else if (rand > 24 && rand < 27) {
        profession += "Tailor."
    } else if (rand > 26 && rand < 29) {
        profession += "Rope maker."
    } else if (rand > 28 && rand < 31) {
        profession += "Fletcher."
    } else if (rand > 30 && rand < 33) {
        profession += "Cooper."
    } else if (rand > 32 && rand < 35) {
        profession += "Cartwright."
    } else if (rand > 34 && rand < 37) {
        profession += "Carpenter."
    } else if (rand > 36 && rand < 39) {
        profession += "Gravedigger / Undertaker."
    } else if (rand > 38 && rand < 41) {
        profession += "Winemaker."
    } else if (rand > 40 && rand < 43) {
        profession += "Ferryman."
    } else if (rand > 42 && rand < 45) {
        profession += "Boat builder."
    } else if (rand > 44 && rand < 47) {
        profession += "Ship's Captain."
    } else if (rand > 46 && rand < 49) {
        profession += "Fortune Teller."
    } else if (rand > 48 && rand < 51) {
        profession += "Handmaiden."
    } else if (rand > 50 && rand < 53) {
        profession += "Miller."
    } else if (rand > 52 && rand < 55) {
        profession += "Executioner."
    } else if (rand > 54 && rand < 57) {
        profession += "Restaurateur."
    } else if (rand > 56 && rand < 59) {
        profession += "Priest / Cultist."
    } else if (rand > 58 && rand < 61) {
        profession += "Engineer."
    } else if (rand > 60 && rand < 63) {
        profession += "Scribe."
    } else if (rand > 62 && rand < 65) {
        profession += "Soldier."
    } else if (rand > 64 && rand < 67) {
        profession += "Banker."
    } else if (rand > 66 && rand < 69) {
        profession += "Apothecary."
    } else if (rand > 68 && rand < 71) {
        profession += "Woodcutter."
    } else if (rand > 70 && rand < 73) {
        profession += "Tax Collector."
    } else if (rand > 72 && rand < 75) {
        profession += "Prostitute."
    } else if (rand > 74 && rand < 77) {
        profession += "Fishmonger."
    } else if (rand > 76 && rand < 79) {
        profession += "Butcher."
    } else if (rand > 78 && rand < 81) {
        profession += "Fruiterer."
    } else if (rand > 80 && rand < 83) {
        profession += "Conman."
    } else if (rand > 82 && rand < 85) {
        profession += "Petty thief ."
    } else if (rand > 84 && rand < 87) {
        profession += "Healer."
    } else if (rand > 86 && rand < 89) {
        profession += "Butler."
    } else if (rand > 88 && rand < 91) {
        profession += "Clerk."
    } else if (rand > 90 && rand < 93) {
        profession += "Baker."
    } else if (rand > 92 && rand < 95) {
        profession += "Cheese maker."
    } else if (rand > 94 && rand < 97) {
        profession += "Innkeeper."
    } else if (rand > 96 && rand < 99) {
        profession += "Dung Shoveller."
    } else {
        profession += "Courier."
    }

    return profession
}

export default ProfessionRandomize
