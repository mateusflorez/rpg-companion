import MinMaxRandomize from "../shared/MinMaxRandomize"

function SourceRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let source = ""

    if (rand < 4) {
        source = "Notice board.";
    } else if (rand > 3 && rand < 7) {
        source = "NPC.";
    } else if (rand > 6 && rand < 10) {
        source = "Tavern rumour.";
    } else if (rand > 9 && rand < 14) {
        source = "Stumble into situation.";
    } else if (rand > 13 && rand < 17) {
        source = "Guild affiliate.";
    } else if (rand > 17 && rand < 20) {
        source = "Fellow adventurer.";
    } else if (rand > 19 && rand < 23) {
        source = "Mysterious scroll with info on it.";
    } else if (rand > 22 && rand < 26) {
        source = "Hidden piece of paper inside a basic reward / purchase a pc makes.";
    } else if (rand > 25 && rand < 29) {
        source = "Treasure map.";
    } else if (rand > 28 && rand < 32) {
        source = "Found journal - Owner missing.";
    } else if (rand > 31 && rand < 35) {
        source = "Partial map.";
    } else if (rand > 34 && rand < 38) {
        source = "Inheritance - be it a place, an item, or a title.";
    } else if (rand > 37 && rand < 41) {
        source = "Geas or Quest Spell.";
    } else if (rand > 40 && rand < 44) {
        source = "Unholy visions.";
    } else if (rand > 43 && rand < 47) {
        source = "A lost map or letter found.";
    } else if (rand > 46 && rand < 50) {
        source = "Sent on mission by friend or relative.";
    } else if (rand > 49 && rand < 53) {
        source = "A dream.";
    } else if (rand > 52 && rand < 56) {
        source = "Local temple gives you the quest.";
    } else if (rand > 55 && rand < 59) {
        source = "Rumour picked up at guard station.";
    } else if (rand > 58 && rand < 62) {
        source = "Merchant's Guild / merchants.";
    } else if (rand > 61 && rand < 65) {
        source = "Noble family entrusts you.";
    } else if (rand > 64 && rand < 68) {
        source = "Event sparks a memory.";
    } else if (rand > 67 && rand < 71) {
        source = "Divine inspiration.";
    } else if (rand > 70 && rand < 74) {
        source = "Overheard conversation.";
    } else if (rand > 73 && rand < 77) {
        source = "Passing traveller.";
    } else if (rand > 76 && rand < 80) {
        source = "Entrusted with delivering a parcel. Something compels you to peek inside!";
    } else if (rand > 79 && rand < 84) {
        source = "Herald makes proclamation in market square.";
    } else if (rand > 83 && rand < 88) {
        source = "Orders from higher command, guild or society(from afar perhaps).";
    } else if (rand > 87 && rand < 91) {
        source = "Note on dead creature.";
    } else if (rand > 90 && rand < 94) {
        source = "You awake with a map tattooed on you!";
    } else if (rand > 93 && rand < 98) {
        source = "Natural disaster reveals something.";
    } else {
        source = "A friend has died as a result of this situation, you must avenge!";
    }

    return source
}

export default SourceRandomize
