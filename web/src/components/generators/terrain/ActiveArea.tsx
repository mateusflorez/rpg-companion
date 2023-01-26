import MinMaxRandomize from "../shared/MinMaxRandomize"
import ClueRandomize from "./minor/ClueRandomize"

function ActiveArea() {
    let res = ""
    var temp2 = ""
    const rand = MinMaxRandomize(1, 100)

    if (rand < 27) {
        res = "This area contains more proof of the rumours / leads you are investigating. " + ClueRandomize();
    } else if (rand > 25 && rand < 54) {
        let temp1 = MinMaxRandomize(1, 6);
        if (temp1 < 4) {
            temp2 += " Medium encounter.";
        } else if (temp1 > 3 && temp1 < 6) {
            temp2 += " Hard encounter.";
        } else {
            temp2 += " Deadly encounter.";
        }
        temp1 = MinMaxRandomize(1, 100);
        if (temp1 < 51) {
            temp2 += " You haven't been noticed. On a successful stealth roll (DC = Creature's passive perception), attack with surprise.";
        }
        res = "You find the beast / monster / cause of the problem you have been looking for." + temp2;
    } else if (rand > 53 && rand < 81) {
        let temp1 = MinMaxRandomize(1, 6);
        if (temp1 < 4) {
            temp2 += " BBEG: Medium encounter.";
        } else if (temp1 > 3 && temp1 < 6) {
            temp2 += " BBEG: Hard encounter.";
        } else {
            temp2 += " BBEG: Deadly encounter.";
        }
        res = "You find the beast / monster / cause of the problem you have been looking for, and an associated structure or dwelling, such as a lair or ruins that they inhabit. (Use the dungeon generator)." + temp2;
    } else if (rand > 80 && rand < 83) {
        res = "You find a lair or dwelling, but it appears currently uninhabited. Perhaps the creature you seek is away causing mischief right now!";
    } else if (rand > 82 && rand < 85) {
        res = "Stealth check from all your PCs. If one check is lower than 14, then the creature has noticed your PC's arrival and is stalking them, preparing an attack.They will probably be surprised!";
    } else if (rand > 84 && rand < 87) {
        res = "This area is not what it was rumoured to be. Make a d100 rolls. If it is 25 or below, roll on the Wilderness Encounter. After resolving the encounter, continue exploring the area and make an investigation check, DC 15. If successful, roll again on active area.";
    } else if (rand > 86 && rand < 89) {
        let temp1 = MinMaxRandomize(1, 6);
        if (temp1 < 4) {
            temp2 += "hostile";
        } else {
            temp2 += "friendly";
        }
        res = "You find another party of adventurers investigating the same rumours / leads you are investigating. They are " + temp2 + ". There are " + MinMaxRandomize(1, 4) + " members in the party.Roll on NPC tables(skip professions and roll on class tables instead) to determine who they are, then roll active area again.";
    } else if (rand > 88 && rand < 91) {
        res = "You find a dead party of " + MinMaxRandomize(1, 4) + " adventurers (use NPC tables if you wish). They have been hacked / maimed savagely, and it appears all their weapons and belongings have been stolen.";
    } else if (rand > 90 && rand < 93) {
        res = "You find a dead party of " + MinMaxRandomize(1, 4) + " adventurers.";
    } else if (rand > 92 && rand < 95) {
        res = "You meet an NPC, who gives you details of another, far more important quest related to this one. Roll Quest Generation to find out what it is.";
    } else if (rand > 94 && rand < 97) {
        res = "You discover that the creature or target you seek has discovered that something is tracking them, and has departed the area.You could pursue(further rolls on Wilderness generation tables, above), or you could declare the matter solved.";
    } else if (rand > 96 && rand < 99) {
        res = "A mysterious NPC, a lone adventurer, is present here, and has resolved the issue. They give proof too(carcass / spoils of completed quest).They tell you that you may claim the fame of completing this, as long as you accompany them.";
    } else if (rand > 25 && rand < 54) {
        res = "The target or creature you already seek is dead (possibly by another party of adventurers, who you may meet nearby), but on investigation you discover that the creature did not deserve to die and were probably innocent or were just minding their own business. Whoever gave you these rumours or set you on this quest is either deluded, or else deliberately deceiving you for some reason.";
    } else {
        res = "The rumour turns out to be some sort of devious trap to lure your PCs into an ambush! Level appropriate deadly encounter.";
    }

    return res
}

export default ActiveArea
