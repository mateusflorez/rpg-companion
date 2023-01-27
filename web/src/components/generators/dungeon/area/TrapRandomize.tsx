import MinMaxRandomize from "../../shared/MinMaxRandomize"

function TrapRandomize() {
    var rand = MinMaxRandomize(1, 20)
    let trap = ""

    if (rand < 6) {
        trap = "Trap: Poison darts."
    } else if (rand > 6 && rand < 13) {
        trap = "Trap: Collapsing Roof."
    } else if (rand > 12 && rand < 20) {
        trap = "Trap: Simple Pit."
    } else if (rand > 19 && rand < 27) {
        trap = "Trap: Hidden pit."
    } else if (rand > 26 && rand < 33) {
        trap = "Trap: Locking pit."
    } else if (rand > 32 && rand < 39) {
        trap = "Trap: Spiked pit."
    } else if (rand > 38 && rand < 45) {
        trap = "Trap: Rolling sphere."
    } else if (rand > 44 && rand < 51) {
        trap = "Trap: Scything blade."
    } else if (rand > 50 && rand < 57) {
        let temp1 = MinMaxRandomize(1, 4)
        var temp = ""
        if (temp1 === 1) {
            temp += "fire."
        } else if (temp1 === 2) {
            temp += "cold."
        } else if (temp1 === 3) {
            temp += "force."
        } else {
            temp += "lightning."
        }
        trap = "Trap: Glyph trap " + temp
    } else if (rand > 56 && rand < 64) {
        trap = "Trap: Magic missile spell."
    } else if (rand > 63 && rand < 70) {
        trap = "Trap: Poison gas released / Acid Spray."
    } else if (rand > 69 && rand < 77) {
        trap = "Trap: Room fills with water."
    } else if (rand > 76 && rand < 83) {
        trap = "Trap: Walls begin closing."
    } else if (rand > 82 && rand < 89) {
        trap = "Trap: Spears come out of floor."
    } else if (rand > 88 && rand < 94) {
        trap = "Trap: Spiked grate drops."
    } else {
        trap = "Trap: Trapdoor (snakes / acid below ?)."
    }

    rand = MinMaxRandomize(1, 100)
    if (rand < 6 && rand < 13) {
        trap += " Notice DC: 10."
    } else if (rand > 12 && rand < 20) {
        trap += " Notice DC: 11."
    } else if (rand > 19 && rand < 33) {
        trap += " Notice DC: 12."
    } else if (rand > 32 && rand < 39) {
        trap += " Notice DC: 13."
    } else if (rand > 38 && rand < 51) {
        trap += " Notice DC: 14."
    } else if (rand > 50 && rand < 64) {
        trap += " Notice DC: 15"
    } else if (rand > 63 && rand < 77) {
        trap += " Notice DC: 16"
    } else if (rand > 76 && rand < 83) {
        trap += " Notice DC: 17"
    } else if (rand > 82 && rand < 89) {
        trap += " Notice DC: 18"
    } else if (rand > 88 && rand < 94) {
        trap += " Notice DC: 19"
    } else {
        trap += " Notice DC: 20"
    }

    rand = MinMaxRandomize(1, 100)
    if (rand < 6 && rand < 13) {
        trap += " Save DC: 10."
    } else if (rand > 12 && rand < 20) {
        trap += " Save DC: 11."
    } else if (rand > 19 && rand < 33) {
        trap += " Save DC: 12."
    } else if (rand > 32 && rand < 39) {
        trap += " Save DC: 13."
    } else if (rand > 38 && rand < 51) {
        trap += " Save DC: 14."
    } else if (rand > 50 && rand < 64) {
        trap += " Save DC: 15"
    } else if (rand > 63 && rand < 77) {
        trap += " Save DC: 16"
    } else if (rand > 76 && rand < 83) {
        trap += " Save DC: 17"
    } else if (rand > 82 && rand < 89) {
        trap += " Save DC: 18"
    } else if (rand > 88 && rand < 94) {
        trap += " Save DC: 19"
    } else {
        trap += " Save DC: 20"
    }

    rand = MinMaxRandomize(1, 100)
    let rand1 = MinMaxRandomize(1, 6)
    if (rand < 6) {
        trap += " Damage: " + rand1 + " X PC level -3 (min 1)"
    } else if (rand > 6 && rand < 13) {
        trap += " Damage: " + rand1 + " X PC level -2 (min 1)"
    } else if (rand > 12 && rand < 27) {
        trap += " Damage: " + rand1 + " X PC level -1 (min 1)"
    } else if (rand > 26 && rand < 45) {
        trap += " Damage: " + rand1 + " X PC level"
    } else if (rand > 44 && rand < 70) {
        trap += " Damage: " + rand1 + " X PC level +1"
    } else if (rand > 69 && rand < 89) {
        trap += " Damage: " + rand1 + " X PC level +2"
    } else if (rand > 88 && rand < 94) {
        trap += " Damage: PC level X 1,5 X " + rand1
    } else {
        trap += " Damage: PC level X 2 X " + rand1
    }

    return trap
}

export default TrapRandomize
