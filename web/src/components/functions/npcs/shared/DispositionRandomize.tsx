import MinMaxRandomize from "../../shared/MinMaxRandomize"


function DispositionRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let disposition = ""

    if (rand < 3) {
        disposition += "§Disposition: Shy."
    } else if (rand > 2 && rand < 5) {
        disposition += "§Disposition: Aloof / Superior."
    } else if (rand > 4 && rand < 9) {
        disposition += "§Disposition: Foolish / idiotic."
    } else if (rand > 8 && rand < 11) {
        disposition += "§Disposition: Cocky / Arrogant."
    } else if (rand > 10 && rand < 13) {
        disposition += "§Disposition: Envious."
    } else if (rand > 12 && rand < 15) {
        disposition += "§Disposition: Grumpy."
    } else if (rand > 14 && rand < 17) {
        disposition += "§Disposition: Mischievous (good or evil)."
    } else if (rand > 16 && rand < 21) {
        disposition += "§Disposition: Playful / Joking."
    } else if (rand > 20 && rand < 23) {
        disposition += "§Disposition: Insane."
    } else if (rand > 22 && rand < 25) {
        disposition += "§Disposition: Abrupt / Unpredictable."
    } else if (rand > 24 && rand < 27) {
        disposition += "§Disposition: Melancholic / Airy."
    } else if (rand > 26 && rand < 31) {
        disposition += "§Disposition: Romantic."
    } else if (rand > 30 && rand < 33) {
        disposition += "§Disposition: Frustrated."
    } else if (rand > 32 && rand < 35) {
        disposition += "§Disposition: Stressed."
    } else if (rand > 34 && rand < 37) {
        disposition += "§Disposition: Weird."
    } else if (rand > 36 && rand < 41) {
        disposition += "§Disposition: Serene / Peaceful."
    } else if (rand > 40 && rand < 43) {
        disposition += "§Disposition: Cagy / Mysterious."
    } else if (rand > 42 && rand < 45) {
        disposition += "§Disposition: Distracted."
    } else if (rand > 44 && rand < 47) {
        disposition += "§Disposition: Sad."
    } else if (rand > 46 && rand < 51) {
        disposition += "§Disposition: Single-Minded."
    } else if (rand > 50 && rand < 53) {
        disposition += "§Disposition: Angry."
    } else if (rand > 52 && rand < 55) {
        disposition += "§Disposition: Blase."
    } else if (rand > 54 && rand < 57) {
        disposition += "§Disposition: Joyous."
    } else if (rand > 56 && rand < 61) {
        disposition += "§Disposition: Vengeful."
    } else if (rand > 61 && rand < 63) {
        disposition += "§Disposition: Malicious."
    } else if (rand > 62 && rand < 65) {
        disposition += "§Disposition: Afraid."
    } else if (rand > 64 && rand < 67) {
        disposition += "§Disposition: Disgusted."
    } else if (rand > 66 && rand < 71) {
        disposition += "§Disposition: Resignation."
    } else if (rand > 70 && rand < 73) {
        disposition += "§Disposition: Nostalgic."
    } else if (rand > 72 && rand < 75) {
        disposition += "§Disposition: Envious."
    } else if (rand > 74 && rand < 77) {
        disposition += "§Disposition: Determined."
    } else if (rand > 76 && rand < 81) {
        disposition += "§Disposition: Pity."
    } else if (rand > 80 && rand < 83) {
        disposition += "§Disposition: Disdain."
    } else if (rand > 82 && rand < 86) {
        disposition += "§Disposition: Hopelessness."
    } else if (rand > 85 && rand < 89) {
        disposition += "§Disposition: Amused."
    } else if (rand > 88 && rand < 93) {
        disposition += "§Disposition: Reckless."
    } else if (rand > 92 && rand < 96) {
        disposition += "§Disposition: Lonely."
    } else if (rand > 95 && rand < 99) {
        disposition += "§Disposition: Frivolous."
    } else {
        disposition += "§Disposition: Disoriented."
    }

    return disposition
}

export default DispositionRandomize
