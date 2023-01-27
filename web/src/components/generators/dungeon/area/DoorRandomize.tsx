import MinMaxRandomize from "../../shared/MinMaxRandomize"
import Randomize from "../../shared/Randomize"
import PassageRandomize from "./PassageRandomize"
import RoomRandomize from "./RoomRandomize"


function DoorRandomize() {
    const dices = [20, 100]
    let door = ""

    const randomizedDices: any[] = Randomize(dices)

    if (randomizedDices[1] < 21) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else if (temp1 === 2) {
            randomizedDices[0] += 1;
            temp2 = "stairs. " + stairRandomizer();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Standard wooden door, braced with metal, unlocked. Opens onto " + temp2;
    } else if (randomizedDices[1] > 20 && randomizedDices[1] < 26) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 < 3) {
            temp2 = " Locked door! DC 14 thieves tools check to unlock, DC 19 strength check to wrench open. ";
        }
        door = "Iron bars (portcullis) with lever to the side. You can see through to the room. Pulling the lever will raise the portcullis " + temp2 + " Is the lever trapped? Use Q/A and investigation rolls. " + RoomRandomize();
    } else if (randomizedDices[1] > 25 && randomizedDices[1] < 31) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else if (temp1 === 2) {
            randomizedDices[0] += 1;
            temp2 = "stairs. " + stairRandomizer();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Empty doorway. Perhaps a magic glyph trap, triggering an attack spell (Fire Bolt or other). Make a Q / A roll with the modifier Unlikely(-2) to determine.";
    } else if (randomizedDices[1] > 30 && randomizedDices[1] < 36) {
        door = "Wooden door, locked. DC 15 thieves’ tools check, or it will have to be smashed. (or other valid method, such as Knock spell). Door has AC 12 and 20 hp.Opens into a room. " + RoomRandomize();
    } else if (randomizedDices[1] > 35 && randomizedDices[1] < 41) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else if (temp1 === 2) {
            randomizedDices[0] += 1;
            temp2 = "stairs. " + stairRandomizer();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Iron door, locked. DC 14 thieves tools check (or other valid method, such as Knock spell, or smashing it down). Opens onto" + temp2;
    } else if (randomizedDices[1] > 40 && randomizedDices[1] < 46) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else if (temp1 === 2) {
            randomizedDices[0] += 1;
            temp2 = "stairs. " + stairRandomizer();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Locked and trapped stone door. " + trapRandomizer() + "  DC 15 perception to find trap. If trap disarmed / avoided / triggered, opens onto " + temp2;
    } else if (randomizedDices[1] > 45 && randomizedDices[1] < 51) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 < 3) {
            randomizedDices[0] += 1;
            temp2 = "secret passage. " + PassageRandomize();
        } else {
            randomizedDices[1] = MinMaxRandomize(1, 100);
            temp2 = "secret room. " + RoomRandomize();
        }
        door = "Secret door. Does your PC know it's there? Through to " + temp2;
    } else if (randomizedDices[1] > 50 && randomizedDices[1] < 56) {
        door = "Entrance, then 10 ft through to an adjacent passageway. Empty archway, no door.";
    } else if (randomizedDices[1] > 55 && randomizedDices[1] < 61) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Locked stone door, secured with a puzzle. A DC 14 intelligence check will enable the puzzle to be solved and the door unlocked.Opens into " + temp2;
    } else if (randomizedDices[1] > 60 && randomizedDices[1] < 76) {
        let temp1 = MinMaxRandomize(1, 6);
        var temp2 = "";
        var temp3 = "";
        var temp4 = "";
        if (temp1 < 3) {
            temp2 = "Wooden door.";
        } else if (temp1 > 4 && temp1 < 5) {
            temp2 = "Stone door.";
        } else {
            temp2 = "Iron door.";
        }
        temp1 = MinMaxRandomize(1, 6);
        if (temp1 < 4) {
            temp3 = " Trapped.";
        }
        temp1 = MinMaxRandomize(1, 6);
        if (temp1 < 4) {
            temp4 = " Locked.";
        } else {
            temp4 = " Unlocked.";
        }
        door = temp2 + temp3 + temp4;
    } else if (randomizedDices[1] > 75 && randomizedDices[1] < 81) {
        let temp1 = MinMaxRandomize(1, 4);
        var temp2 = "";
        if (temp1 === 1) {
            randomizedDices[0] += 1;
            temp2 = "passage. " + PassageRandomize();
        } else if (temp1 === 2) {
            randomizedDices[0] += 1;
            temp2 = "stairs. " + stairRandomizer();
        } else {
            temp2 = "room. " + RoomRandomize();
        }
        door = "Trapped door. " + trapRandomizer() + " DC 15 perception to find trap. If trap disarmed / avoided / triggered, opens onto " + temp2;
    } else if (randomizedDices[1] > 80 && randomizedDices[1] < 86) {
        door = "Trapped door, can only be opened with a key which is on the body of a humanoid monster somewhere in this dungeon.There is a reason they do not want anyone to enter.";
    } else if (randomizedDices[1] > 85 && randomizedDices[1] < 91) {
        door = "Door composed of elemental energy, such as fire or lightning. You can move through it, but you will take 3d8 damage of whatever type it is composed of";
    } else if (randomizedDices[1] > 90 && randomizedDices[1] < 96) {
        door = "Heavy stone door, requires athletics check to open (DC 16). -1 hp for every 2 failed strength checks.Opens into room. " + RoomRandomize();
    } else {
        door = "Door is smashed and hanging off its hinges (why?). Leads into a room. " + RoomRandomize();
    }

    return door
}

export default DoorRandomize
