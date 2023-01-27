import MinMaxRandomize from "../../shared/MinMaxRandomize"


function ClueRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let clue = ""

    if (rand === 1) {
        clue = "Clue: A broken arrow of a distinctive type."
    } else if (rand === 2) {
        clue = "Clue: The monster's / NPCs weapon has dried blood on it. But what type?"
    } else if (rand === 3) {
        clue = "Clue: The carcass or area has a strange odour."
    } else if (rand === 4) {
        clue = "Clue: There is a strange noise coming from somewhere in this area."
    } else if (rand === 5) {
        clue = "Clue: You see tracks leading off from this area."
    } else if (rand === 6) {
        clue = "Clue: " + MinMaxRandomize(1, 10) + " platinum pieces in an ornately embroidered pouch. The embroidery mentions someone's name."
    } else if (rand === 7) {
        clue = "Clue: Magical compass, player has to figure out the command word to activate it."
    } else if (rand === 8) {
        clue = "Clue: The corpse is gripping an envelope. The wax sealed with an unknown sigil."
    } else if (rand === 9) {
        clue = "Clue: You see fresh blood stains splattered on the wall. One part is still trickling down as you enter the room."
    } else if (rand === 10) {
        clue = "Clue: The body is covered in map symbols"
    } else if (rand === 11) {
        clue = "Clue: The body is covered in runic tattoos."
    } else if (rand === 12) {
        clue = "Clue: The body is contorted, showing evidence of reconstructive surgery to head and chest cavity, with attachments & implants below the skin."
    } else if (rand === 13) {
        clue = "Clue: The body is branded with a number, directly behind the neck."
    } else if (rand === 14) {
        clue = "Clue: The body has a significant number of healed wounds, suggesting ongoing punishment and whipping."
    } else if (rand === 15) {
        clue = "Clue: An old wooden toy-horse, that you were used to play with as a child and that you forgot until now."
    } else if (rand === 16) {
        clue = "Clue: You hear loud Ravens/Crows nonstop cawing nearby."
    } else if (rand === 17) {
        clue = "Clue: You find a pendant with a missing piece."
    } else if (rand === 18) {
        clue = "Clue: You find sacks of bloody corn and wheat."
    } else if (rand === 19) {
        clue = "Clue: You notice a bright flash of purplish light just out of the corner of your eye."
    } else if (rand === 20) {
        clue = "Clue: The room/corpse is covered in a thin layer of frost."
    } else if (rand === 21) {
        clue = "Clue: A note with only the name of the nearby town written in it."
    } else if (rand === 22) {
        clue = "Clue: Stones patterned in a directional arrow with the words Help me under it."
    } else if (rand === 23) {
        clue = "Clue: Part of a map."
    } else if (rand === 24) {
        clue = "Clue: Broken weapon with runes on it."
    } else if (rand === 25) {
        clue = "Clue: A holy symbol."
    } else if (rand === 26) {
        clue = "Clue: An adventurer's backpack containing a journal, with entries that stop abruptly."
    } else if (rand === 27) {
        clue = "Clue: A rope hanging from above. It appears to have been crudely hacked at the bottom end."
    } else if (rand === 28) {
        clue = "Clue: Graffiti on the wall. “Beware the Great Hall!!”"
    } else if (rand === 29) {
        clue = "Clue: In the floor is a hole, and beside it a spade. It appears as if someone started digging and then gave up. Or..."
    } else if (rand === 30) {
        clue = "Clue: A bear or man trap sitting in a pool of blood. Perhaps a severed limb nearby."
    } else if (rand === 31) {
        clue = "Clue: Tracks, only they are made out in flour."
    } else if (rand === 32) {
        clue = "Clue: A broken lantern."
    } else if (rand === 33) {
        clue = "Clue: An empty coffin, the lid broken."
    } else if (rand === 34) {
        clue = "Clue: Lying on the floor, a glass chess piece."
    } else if (rand === 35) {
        clue = "Clue: Broken blade of a sword."
    } else if (rand === 36) {
        clue = "Clue: Singing, distant and mournful."
    } else if (rand === 37) {
        clue = "Clue: Whispering, from somewhere in the room, disembodied. It stops and starts again, unnervingly."
    } else if (rand === 38) {
        clue = "Clue: A pile of carefully stacked stones is situated in the middle of this area."
    } else if (rand === 39) {
        clue = "Clue: Loud thumping from either above or below the current area you are in."
    } else if (rand === 40) {
        clue = "Clue: You notice a loose brick in the wall. Peering behind it, you find a hidden scroll. What is written on it ? (Q/A or situations) "
    } else if (rand === 41) {
        clue = "Clue: A hole has been bashed through the wall into an adjoining chamber. This chamber doesn't appear to have any other way in or out."
    } else if (rand === 42) {
        clue = "Clue: A pack and its contents strewn across the ground. (Suggests live or dead NPC somewhere in the dungeon)."
    } else if (rand === 43) {
        clue = "Clue: There is rubble here, but it has been swept to the walls in neat piles by someone, obviously using a broom."
    } else if (rand === 44) {
        clue = "Clue: You hear whispering right behind you, but when you turn, no one is there."
    } else if (rand === 45) {
        clue = "Clue: A severed hand covered in stitches lies on the floor."
    } else if (rand === 46) {
        clue = "Clue: A book of hand-sketched images of various humanoids, some of them with large red crosses through them."
    } else if (rand === 47) {
        clue = "Clue: A body is here, and has been savaged, as if by a wild animal."
    } else if (rand === 48) {
        clue = "Clue: A shield lies on the ground in two pieces. Whatever ripped through this obviously possesses great strength."
    } else if (rand === 49) {
        clue = "Clue: A platinum piece, glued to the floor."
    } else if (rand === 50) {
        clue = "Clue: A small ray of light shines through a crack in the ceiling."
    } else if (rand === 51) {
        clue = "Clue: A trail of blood, as if a body were being dragged, leads away. It stops suddenly."
    } else if (rand === 52) {
        clue = "Clue: A long list of names, all of them crossed out except for the last 5-10. Close to the end is the PCs name."
    } else if (rand === 53) {
        clue = "Clue: A detailed color map of the local area, marked with several previously unknown ruins."
    } else if (rand === 54) {
        clue = "Clue: A chill wind, as if someone opened a door onto an arctic tundra, blows through this area briefly."
    } else if (rand === 55) {
        clue = "Clue: You hear the sound of metal being dragged across stone. It continues for a while and then stops."
    } else if (rand === 56) {
        clue = "Clue: Suddenly you realize your footfalls have become completely silent."
    } else if (rand === 57) {
        clue = "Clue: Ball bearings or caltrops litter the floor in this area."
    } else if (rand === 58) {
        clue = "Clue: Geometric shapes drawn in chalk on the floor."
    } else if (rand === 59) {
        clue = "Clue: The floor is covered by a rug. A close inspection will reveal some spots of a dark liquid, possibly blood..."
    } else if (rand === 60) {
        clue = "Clue: A map of a labyrinth neatly made on a piece of parchment."
    } else if (rand === 61) {
        clue = "Clue: A letter of recommendation from a noble no-one has heard of"
    } else if (rand === 62) {
        clue = "Clue: The remains of an adventurer lie slumped against the wall. In his hand he holds a vial or a note."
    } else if (rand === 63) {
        clue = "Clue: Hurried footsteps, coming from somewhere up ahead."
    } else if (rand === 64) {
        clue = "Clue:A small beast (cockroach?) sits in an alcove. As you pass, it speaks to you!"
    } else if (rand === 65) {
        clue = "Clue: Bucket of entrails from an unknown creature."
    } else if (rand === 66) {
        clue = "Clue: Target practice dummy is nearby."
    } else if (rand === 67) {
        clue = "Clue: The sound of glass smashing comes from somewhere, echoing off the walls."
    } else if (rand === 68) {
        clue = "Clue: A fine dagger with a retracting blade. Who did it belong to?"
    } else if (rand === 69) {
        clue = "Clue: A piece of shell that looks like it came from a large egg."
    } else if (rand === 70) {
        clue = "Clue: The wall has been carved away, and a large standing stone has been placed in the newly formed alcove.It is covered in strange writing."
    } else if (rand === 71) {
        clue = "Clue: A large roast meal is laid out on a table, complete with place settings. It is steaming hot and looks delicious, but it totally untouched."
    } else if (rand === 72) {
        clue = "Clue: Goblin graffiti on the walls."
    } else if (rand === 73) {
        clue = "Clue: A large collection of animal bones, organized into a pile."
    } else if (rand === 74) {
        clue = "Clue: A cauldron sits in the corner."
    } else if (rand === 75) {
        clue = "Clue: A hand… it looks severed, but the odd thing is that its made of stone."
    } else if (rand === 76) {
        clue = "Clue: You find a stone jar containing teeth of all descriptions."
    } else if (rand === 77) {
        clue = "Clue: An adventurer's journal. Reading through, you see the entries stop suddenly."
    } else if (rand === 78) {
        clue = "Clue: A table and single chair is in the corner. The table is spattered with large globs of wax."
    } else if (rand === 79) {
        clue = "Clue: An empty net on the ground, torn to shreds."
    } else if (rand === 80) {
        clue = "Clue: A stack of clay tablets, all with indecipherable runes."
    } else if (rand === 81) {
        clue = "Clue: A lute, but the neck has been smashed from the body and is dangling by the strings."
    } else if (rand === 82) {
        clue = "Clue: The shrunken head of a kobold."
    } else if (rand === 83) {
        clue = "Clue: Book containing a history of the world - not of this world though."
    } else if (rand === 84) {
        clue = "Clue: A well, in the middle of the dungeon. A rope hangs down from its top."
    } else if (rand === 85) {
        clue = "Clue: You step on a stone and hear a click..."
    } else if (rand === 86) {
        clue = "Clue: A clanking sound, followed by a hissing sound, from somewhere below..."
    } else if (rand === 87) {
        clue = "Clue: A jar of pickled eyes."
    } else if (rand === 88) {
        clue = "Clue: There is a campfire circle containing a prepared fire, but it has not been lit."
    } else if (rand === 89) {
        clue = "Clue: Hammered to a nearby door or affixed to the wall is a piece of framed parchment - completely blank."
    } else if (rand === 90) {
        clue = "Clue: An empty brandy bottle."
    } else if (rand === 91) {
        clue = "Clue: A six-sided dice that is all ones."
    } else if (rand === 92) {
        clue = "Clue: A halfling's skull, intact except for a perfect circle removed at the top."
    } else if (rand === 93) {
        clue = "Clue: A large assortment of clay pots in alcoves, all containing noxious-smelling liquids."
    } else if (rand === 94) {
        clue = "Clue: A weapons rack is on the wall, containing several ancient, rusted weapons. A few of these might be able to be restored if taken to an expert."
    } else if (rand === 95) {
        clue = "Clue: A steady flow of moisture down a nearby wall leads you to think you might be below a body of water."
    } else if (rand === 96) {
        clue = "Clue: The sound of children's laughter, echoing from every direction."
    } else if (rand === 97) {
        clue = "Clue: A bag of feathers. A successful nature check (DC 12) reveals them to be from a harpy."
    } else if (rand === 98) {
        clue = "Clue: You find a parchment containing what looks like a recipe for a particular kind of potion."
    } else if (rand === 99) {
        clue = "Clue: A pouch of spell components."
    } else {
        clue = "Clue: Magic item! Relevant to quest."
    }

    return clue
}

export default ClueRandomize
