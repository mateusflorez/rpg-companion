import MinMaxRandomize from "../shared/MinMaxRandomize"
import SettlementRandomize from "../terrain/minor/SettlementRandomize"


function WildernessEvent() {
    const rand = MinMaxRandomize(1, 100)
    let wildernessEvent = ""

    if (rand < 3) {
        wildernessEvent += " Landslide / Avalanche."
    } else if (rand > 2 && rand < 5) {
        wildernessEvent += "Earthquake."
    } else if (rand > 4 && rand < 7) {
        wildernessEvent += "Storm."
    } else if (rand > 6 && rand < 9) {
        wildernessEvent += "Druid gathering."
    } else if (rand > 8 && rand < 11) {
        wildernessEvent += "Religious pilgrimage."
    } else if (rand > 10 && rand < 13) {
        wildernessEvent += "Army encamped."
    } else if (rand > 12 && rand < 15) {
        wildernessEvent += "Sudden storm / gale force winds."
    } else if (rand > 14 && rand < 17) {
        wildernessEvent += "Overturned cart."
    } else if (rand > 16 && rand < 19) {
        wildernessEvent += "Flash flood."
    } else if (rand > 18 && rand < 21) {
        wildernessEvent += "Forest Fire."
    } else if (rand > 20 && rand < 23) {
        wildernessEvent += "Local humanoids having a festival."
    } else if (rand > 22 && rand < 25) {
        wildernessEvent += "Solar eclipse."
    } else if (rand > 24 && rand < 27) {
        wildernessEvent += "Hail (large hailstones?)."
    } else if (rand > 26 && rand < 29) {
        wildernessEvent += "Hurricane."
    } else if (rand > 28 && rand < 31) {
        wildernessEvent += "Tribal encounter."
    } else if (rand > 30 && rand < 33) {
        wildernessEvent += "Animal stampede."
    } else if (rand > 32 && rand < 35) {
        wildernessEvent += "Tree falls."
    } else if (rand > 34 && rand < 37) {
        wildernessEvent += "Boulder falls."
    } else if (rand > 36 && rand < 39) {
        wildernessEvent += "Unseasonable weather."
    } else if (rand > 38 && rand < 41) {
        wildernessEvent += "Lightning strikes."
    } else if (rand > 40 && rand < 43) {
        wildernessEvent += "Market."
    } else if (rand > 42 && rand < 45) {
        wildernessEvent += "Hunting Party."
    } else if (rand > 44 && rand < 47) {
        wildernessEvent += "Farmers harvesting crops."
    } else if (rand > 46 && rand < 49) {
        wildernessEvent += "Cart passing."
    } else if (rand > 48 && rand < 51) {
        wildernessEvent += "Refugees."
    } else if (rand > 50 && rand < 53) {
        wildernessEvent += "Massed Animals."
    } else if (rand > 52 && rand < 55) {
        wildernessEvent += "Toll demanded."
    } else if (rand > 54 && rand < 57) {
        wildernessEvent += "Distressed NPC."
    } else if (rand > 56 && rand < 59) {
        wildernessEvent += "Besieged settlement."
    } else if (rand > 58 && rand < 61) {
        wildernessEvent += "Come across structure."
    } else if (rand > 60 && rand < 63) {
        wildernessEvent += "Battle in progress."
    } else if (rand > 62 && rand < 65) {
        wildernessEvent += "Beast / Monster carcass."
    } else if (rand > 64 && rand < 67) {
        wildernessEvent += "Monster - easy encounter."
    } else if (rand > 66 && rand < 69) {
        wildernessEvent += "Monster - easy encounter."
    } else if (rand > 68 && rand < 71) {
        wildernessEvent += "Monster - medium encounter."
    } else if (rand > 70 && rand < 73) {
        wildernessEvent += "Monster - medium encounter."
    } else if (rand > 72 && rand < 75) {
        wildernessEvent += "Monster - hard encounter."
    } else if (rand > 74 && rand < 77) {
        wildernessEvent += "Monster - deadly encounter."
    } else if (rand > 76 && rand < 79) {
        wildernessEvent += "Volcanic eruption."
    } else if (rand > 78 && rand < 81) {
        wildernessEvent += "Plague (insect / vermin)."
    } else if (rand > 80 && rand < 83) {
        wildernessEvent += "Interdimensional Rift."
    } else if (rand > 82 && rand < 85) {
        wildernessEvent += "Army going to war."
    } else if (rand > 84 && rand < 87) {
        wildernessEvent += "Sinkhole Appears."
    } else if (rand > 86 && rand < 89) {
        wildernessEvent += "Appearance of Tyrant in the area."
    } else if (rand > 88 && rand < 91) {
        wildernessEvent += "Savage raiding party."
    } else if (rand > 90 && rand < 93) {
        wildernessEvent += "Marauding monster attacking village."
    } else if (rand > 92 && rand < 95) {
        wildernessEvent += "Undead awakening."
    } else {
        wildernessEvent += "Unmarked Settlement. " + SettlementRandomize()
    }

    return wildernessEvent
}

export default WildernessEvent
