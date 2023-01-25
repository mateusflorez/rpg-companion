import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize";

function MinorSwampRandomize() {
    const rand = MinMaxRandomize(1, 100);
    var minorSwamp = "";
    var temp2 = "";

    if (rand < 51) {
        let temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 26) {
            temp2 += " Easy encounter.";
        }
        minorSwamp = "Standard swamp. Difficult terrain (half movement)." + temp2;
    } else if (rand > 50 && rand < 58) {
        minorSwamp = "Thick, dense swamp, almost impossible to traverse, extending in all directions forward. Extremely difficult terrain, movement slowed to quarter of normal.";
    } else if (rand > 57 && rand < 65) {
        let temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 51) {
            temp2 += " Hard encounter.";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 31) {
            temp2 += " Clue! " + ClueRandomize();
        }
        minorSwamp = "Patchy swamp with dry areas. Perfect area for bandits or raiders to have a camp." + temp2;
    } else if (rand > 64 && rand < 72) {
        minorSwamp = "Wetland containing many ponds and a network of waterways.May need a small boat to traverse. Survival check, DC 19, to craft a small kayak. Otherwise, might need to go around, adding travel time.";
    } else if (rand > 71 && rand < 79) {
        let temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 11) {
            temp2 += " Clue! " + ClueRandomize();
        }
        minorSwamp = "Dark, eerie swamp, with an eldritch aura. Something evil hides in here… Q/A rolls to determine what!" + temp2;
    } else if (rand > 78 && rand < 86) {
        let temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 51) {
            temp2 += " Hard encounter.";
        }
        minorSwamp = "A land forgotten by time! Ancient swamp, small part of a more primeval wilderness that was here before." + temp2;
    } else if (rand > 85 && rand < 93) {
        let temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 51) {
            temp2 += " Encounter with fey.";
        }
        minorSwamp = "Fey Oasis. Wisdom check (DC 16) or you get totally turned around, lost." + temp2;
    } else {
        minorSwamp = "Swamp inhabited by humanoids who wish to remain hidden from the world. Q/A rolls to determine whether you meet them.";
    }

    return minorSwamp
}

export default MinorSwampRandomize
