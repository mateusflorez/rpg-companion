import MinMaxRandomize from "../shared/MinMaxRandomize"


function UrbanEvent() {
    const rand = MinMaxRandomize(1, 100)
    let urbanEvent = ""

    if (rand < 3) {
        urbanEvent += "Wedding."
    } else if (rand > 2 && rand < 5) {
        urbanEvent += "Name-giving day celebrations."
    } else if (rand > 4 && rand < 7) {
        urbanEvent += "Public holiday."
    } else if (rand > 6 && rand < 9) {
        urbanEvent += "Procession."
    } else if (rand > 8 && rand < 11) {
        urbanEvent += "Harvest Festival."
    } else if (rand > 10 && rand < 13) {
        urbanEvent += "Festival celebrating a god."
    } else if (rand > 12 && rand < 15) {
        urbanEvent += "Celebration of a hero's return."
    } else if (rand > 14 && rand < 17) {
        urbanEvent += "Market day."
    } else if (rand > 16 && rand < 19) {
        urbanEvent += "Religious rally."
    } else if (rand > 18 && rand < 21) {
        urbanEvent += "Official proclamation."
    } else if (rand > 20 && rand < 23) {
        urbanEvent += "Amnesty."
    } else if (rand > 22 && rand < 25) {
        urbanEvent += "Sudden storm / gale force winds."
    } else if (rand > 24 && rand < 27) {
        urbanEvent += "Election / Change of civic leader."
    } else if (rand > 26 && rand < 29) {
        urbanEvent += "Yearly local festival."
    } else if (rand > 28 && rand < 31) {
        urbanEvent += "Assassination."
    } else if (rand > 30 && rand < 33) {
        urbanEvent += "Performance of a play."
    } else if (rand > 32 && rand < 35) {
        urbanEvent += "Musical concert."
    } else if (rand > 34 && rand < 37) {
        urbanEvent += "Buskers performance."
    } else if (rand > 36 && rand < 39) {
        urbanEvent += "Orator / storyteller."
    } else if (rand > 38 && rand < 41) {
        urbanEvent += "Ale fest."
    } else if (rand > 40 && rand < 43) {
        urbanEvent += "Warrior exhibition."
    } else if (rand > 42 && rand < 45) {
        urbanEvent += "Procession of royals."
    } else if (rand > 44 && rand < 47) {
        urbanEvent += "Museum exhibition."
    } else if (rand > 46 && rand < 49) {
        urbanEvent += "New building being opened."
    } else if (rand > 48 && rand < 51) {
        urbanEvent += "Large army passing through town."
    } else if (rand > 50 && rand < 53) {
        urbanEvent += "Gridlocked traffic."
    } else if (rand > 52 && rand < 55) {
        urbanEvent += "Monster invasion!"
    } else if (rand > 54 && rand < 57) {
        urbanEvent += "Conference of Wizards."
    } else if (rand > 56 && rand < 59) {
        urbanEvent += "Graduation ceremony."
    } else if (rand > 58 && rand < 61) {
        urbanEvent += "Traffic accident."
    } else if (rand > 60 && rand < 63) {
        urbanEvent += "Freakish weather event."
    } else if (rand > 62 && rand < 65) {
        urbanEvent += "Fire in Building."
    } else if (rand > 64 && rand < 67) {
        urbanEvent += "Notable local figure assassinated."
    } else if (rand > 66 && rand < 69) {
        urbanEvent += "Public duel."
    } else if (rand > 68 && rand < 71) {
        urbanEvent += "Large scale fire."
    } else if (rand > 70 && rand < 73) {
        urbanEvent += "Sinkhole opens."
    } else if (rand > 72 && rand < 75) {
        urbanEvent += "Local army returning after recent skirmish."
    } else if (rand > 74 && rand < 77) {
        urbanEvent += "Coordinated attack."
    } else if (rand > 76 && rand < 79) {
        urbanEvent += "Protest."
    } else if (rand > 78 && rand < 81) {
        urbanEvent += "Flood."
    } else if (rand > 80 && rand < 83) {
        urbanEvent += "Martial law enforced (Reason?)."
    } else if (rand > 82 && rand < 85) {
        urbanEvent += "Wild magic eruption."
    } else if (rand > 84 && rand < 87) {
        urbanEvent += "Military conscription."
    } else if (rand > 86 && rand < 89) {
        urbanEvent += "Revolution taking place (scale uncertain)."
    } else if (rand > 88 && rand < 91) {
        urbanEvent += "Public Execution."
    } else if (rand > 90 && rand < 93) {
        urbanEvent += "Storm."
    } else if (rand > 92 && rand < 95) {
        urbanEvent += "Plague."
    } else if (rand > 94 && rand < 97) {
        urbanEvent += "Earthquake."
    } else if (rand > 96 && rand < 99) {
        urbanEvent += "Dimensional disruption."
    } else {
        urbanEvent += "Invading force."
    }

    return urbanEvent
}

export default UrbanEvent
