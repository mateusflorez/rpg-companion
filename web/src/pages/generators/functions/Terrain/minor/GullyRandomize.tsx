import MinMaxRandomize from "../../shared/MinMaxRandomize"
import ClueRandomize from "./ClueRandomize";
import WaterwayRandomize from "./WaterwayRandomize";

function GullyRandomize() {
    const rand = MinMaxRandomize(1, 100);
    var gully = "";

    if (rand < 51) {
        gully = "Standard gully.";
    } else if (rand > 50 && rand < 58) {
        gully = "Gully with a waterway. " + WaterwayRandomize();
    } else if (rand > 57 && rand < 65) {
        let temp1 = MinMaxRandomize(1, 100);
        var temp2 = "";
        if (temp1 < 26) {
            temp2 += " Easy encounter!";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 16) {
            temp2 += " They lead to tunnels!";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 11) {
            temp2 += " NPC!";
        }
        gully = "Rocky gully containing caves. Q/A / investigation rolls to investigate caves." + temp2;
    } else if (rand > 64 && rand < 72) {
        gully = "Gully that looks as if recently caused, perhaps by an earthquake or other natural disaster… or by a huge creature perhaps! Q/A / nature rolls to discern cause.";
    } else if (rand > 71 && rand < 79) {
        gully = "Dry gully containing the bones of many animals. A graveyard of sorts. Q/A nature rolls to find out more.";
    } else if (rand > 78 && rand < 86) {
        let temp1 = MinMaxRandomize(1, 100);
        var temp2 = "";
        if (temp1 < 26) {
            temp2 += " Easy encounter!";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize();
        }
        gully = "Heavily wooded gully, an oasis for a particular colony of creatures.Q/A nature rolls to find out more. Are they still here?" + temp2;
    } else if (rand > 85 && rand < 93) {
        gully = "Gully with evidence of mining - an abandoned mining operation. Mines may lead quite far underground. Go to Random Dungeon Generator";
    } else {
        let temp1 = MinMaxRandomize(1, 100);
        var temp2 = "";
        if (temp1 < 51) {
            temp2 += " Friendly!";
        } else {
            temp2 += " Hostile!";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 26) {
            temp2 += " Clue! " + ClueRandomize();
        }
        gully = "Magical wooded gully. A druid, or wizard, or Fey creatures lives here!" + temp2;
    }

    return gully
}

export default GullyRandomize
