import MinMaxRandomize from "../../shared/MinMaxRandomize"

function ClueRandomize() {
    const rand = MinMaxRandomize(1, 100)
    var clue = ""
    var temp2 = ""

    if (rand === 1) {
        clue = "Clue: " + MinMaxRandomize(1, 4) + " corpses, beast."
    } else if (rand === 2) {
        clue = "Clue: " + MinMaxRandomize(1, 4) + " corpses, humanoid."
    } else if (rand === 3) {
        clue = "Clue: Severed limb."
    } else if (rand === 4) {
        clue = "Clue: Severed extremity."
    } else if (rand === 5) {
        clue = "Clue: Holes dug in the ground in a variety of locations."
    } else if (rand === 6) {
        clue = "Clue: Strange odour on the air."
    } else if (rand === 7) {
        clue = "Clue: You find a bizarre and haunting monument, such as a totem made of dead bodies, or something equally spooky."
    } else if (rand === 8) {
        clue = "Clue: A crude sign is staked in the ground, with the head of a humanoid of the same species as yourself atop it.In any language, the words ”Warning! Turn back or die!” are garishly scrawled on the piece of wood that forms the sign."
    } else if (rand === 9) {
        clue = "Clue: Tracks of the creature you are currently seeking."
    } else if (rand === 10) {
        clue = "Clue: You meet an NPC who saw the creature or target earlier."
    } else if (rand === 11) {
        let temp1 = MinMaxRandomize(1, 100)
        if (temp1 < 51) {
            temp2 += " They wounded it and were wounded by it."
        } else {
            temp2 += " They were savaged fled for their life."
        }
        clue = "Clue: You meet an NPC who got into an altercation with the target." + temp2
    } else if (rand === 12) {
        clue = "Clue: A burnt area of ground, like a fireball or explosion happened here."
    } else if (rand === 13) {
        clue = "Clue: Injured beast."
    } else if (rand === 14) {
        clue = "Clue: Droppings from some strange animal."
    } else if (rand === 15) {
        clue = "Clue: Abandoned campsite."
    } else if (rand === 16) {
        clue = "Clue: Adventurer's belongings, spattered with blood."
    } else if (rand === 17) {
        clue = "Clue: A noose hanging from a tree, but no body."
    } else if (rand === 18) {
        clue = "Clue: A previously triggered trap."
    } else if (rand === 19) {
        clue = "Clue: Wagon tracks leading off the current path you are on."
    } else if (rand === 20) {
        clue = "Clue: Sword marks in the trunk of a tree."
    } else if (rand === 21) {
        clue = "Clue: Hastily scribbled marks in the ground / on the trunk of a tree… someone trying to leave directions? Or is it a warning? Are there words? If so, in what language?"
    } else if (rand === 22) {
        clue = "Clue: Scrawled on a rock: “I've found them. Keep going east, you'll reach me eventually.”"
    } else if (rand === 23) {
        clue = "Clue: A stone with ancient runes inscribed."
    } else if (rand === 24) {
        clue = "Clue: A small ruins, as of a shrine or small temple. Interesting inscriptions/graffiti."
    } else if (rand === 25) {
        clue = "Clue: Broken weapon."
    } else if (rand === 26) {
        clue = "Clue: Ancient coin."
    } else if (rand === 27) {
        clue = "Clue: A halfling / gnome-sized cloak but the bottom edge is ripped and torn."
    } else if (rand === 28) {
        clue = "Clue: An incomplete journal. What's in it? The entries stop abruptly."
    } else if (rand === 29) {
        clue = "Clue: A map of a labyrinth."
    } else if (rand === 30) {
        clue = "Clue: A set of parchment and 3 ink bottles. All the red is used up."
    } else if (rand === 31) {
        clue = "Clue: A wig of human hair, any color."
    } else if (rand === 32) {
        clue = "Clue: A discarded pipe smelling strongly of pipe-weed, recently used."
    } else if (rand === 33) {
        clue = "Clue: Multiple broken branches - it appears someone or something charged recklessly through here.If not in forest, then you notice large areas of earth churned up."
    } else if (rand === 34) {
        clue = "Clue: A poster that looks like it was ripped from a wall of a nearby town. Wanted poster? Adventurers wanted? Perhaps a quest source."
    } else if (rand === 35) {
        clue = "Clue: A ring of keys, apparently goblin or orcish in origin."
    } else if (rand === 36) {
        clue = "Clue: An empty, but ornate, jewellery box."
    } else if (rand === 37) {
        clue = "Clue: A bag of provisions, ripped and scattered around."
    } else if (rand === 38) {
        clue = "Clue: A discarded boot."
    } else if (rand === 39) {
        clue = "Clue: A child's doll."
    } else if (rand === 40) {
        clue = "Clue: A gold bar (approximately 100 gp in worth) with the words “Imperial Bullion” embossed in the metal."
    } else if (rand === 41) {
        clue = "Clue: An iron amulet in the shape of a snake eating itself."
    } else if (rand === 42) {
        clue = "Clue: A silver key on a leather thong."
    } else if (rand === 43) {
        clue = "Clue: A jar that appears empty, but the lid is jammed shut and cannot be opened, no matter how strong you are.Is it shut magically?"
    } else if (rand === 44) {
        clue = "Clue: A tree with the bark worn through on one side."
    } else if (rand === 45) {
        clue = "Clue: A large clump of fur from some kind of creature."
    } else if (rand === 46) {
        clue = "Clue: What appears to be a large snakeskin. Something has shed a layer here."
    } else if (rand === 47) {
        clue = "Clue: A disturbingly large pile of poop."
    } else if (rand === 48) {
        clue = "Clue: This area is scattered with bones from many different creatures."
    } else if (rand === 49) {
        clue = "Clue: A campfire, smouldering, large rodent on a spit which is burnt to a crisp, inedible."
    } else if (rand === 50) {
        clue = "Clue: A compass, but the glass is smashed."
    } else if (rand === 51) {
        clue = "Clue: A rock with a target on it, surrounded by a mass of sling stones."
    } else if (rand === 52) {
        clue = "Clue: Large quantity of blood spattered over the ground / leaves in this area."
    } else if (rand === 53) {
        clue = "Clue: The remnants of a naturally-constructed bivouac."
    } else if (rand === 54) {
        clue = "Clue: From far off, an eerie howling noise."
    } else if (rand === 55) {
        clue = "Clue: Scrawled on a rock in red paint, crudely written in Common: “Stop! Go no further if you value your life!!”"
    } else if (rand === 56) {
        clue = "Clue: Several empty wineskins and discarded goblets."
    } else if (rand === 57) {
        clue = "Clue: " + MinMaxRandomize(1, 10) + " arrows, high quality, all sticking out of the ground in this area."
    } else if (rand === 58) {
        clue = "Clue: Invitation to an event in a nearby town."
    } else if (rand === 59) {
        clue = "Clue: A small onyx figurine of a beast of some kind (player's choice)."
    } else if (rand === 60) {
        clue = "Clue: A grove of large mushrooms, but most of them have been trampled or destroyed."
    } else if (rand === 61) {
        clue = "Clue: Several plans, as if from a cart or a boat, their ends burned."
    } else if (rand === 62) {
        clue = "Clue: A locket with a picture of a humanoid female inside."
    } else if (rand === 63) {
        clue = "Clue: A perfectly spherical stone. Is it naturally occurring? Nonetheless, it definitely catches your attention."
    } else if (rand === 64) {
        clue = "Clue: A book on learning the language Undercommon."
    } else if (rand === 65) {
        clue = "Clue: A wooden token bearing the symbol of a powerful organization or faction."
    } else if (rand === 66) {
        clue = "Clue: Trailblazing marks."
    } else if (rand === 67) {
        clue = "Clue: A vial full of some sort of tree sap. On inspection, you see that it has been collected from a particular species of tree that grows in this area(although not commonly)."
    } else if (rand === 68) {
        clue = "Clue: Black-fletched crossbow bolts sticking out of a tree trunk."
    } else if (rand === 69) {
        clue = "Clue: A child-sized sword."
    } else if (rand === 70) {
        clue = "Clue: A small pouch of seeds."
    } else if (rand === 71) {
        clue = "Clue: An area of pressed-down grass, as if a humanoid had been lying here."
    } else if (rand === 72) {
        clue = "Clue: An empty, abandoned tent."
    } else if (rand === 73) {
        clue = "Clue: A rune, spelt out in stones on the ground."
    } else if (rand === 74) {
        clue = "Clue: A jar of sweets, half empty."
    } else if (rand === 75) {
        clue = "Clue: A jawbone from a creature of some kind."
    } else if (rand === 76) {
        clue = "Clue: The broken blade of a sword."
    } else if (rand === 77) {
        clue = "Clue: Sword marks in a tree trunk."
    } else if (rand === 78) {
        clue = "Clue: A belt pouch full of silver coins from an unknown land."
    } else if (rand === 79) {
        clue = "Clue: About a mile ahead, you see vultures circling in the air."
    } else if (rand === 80) {
        clue = "Clue: A freshly dug grave, empty."
    } else if (rand === 81) {
        clue = "Clue: Funeral pyre. Whatever was burnt here is now just ash."
    } else if (rand === 82) {
        clue = "Clue: Overturned cart. No-one here, just some random belongings."
    } else if (rand === 83) {
        clue = "Clue: A wolf (or other sometimes-domesticated beast) starts to follow you. It looks forlorn, as if it has lost its master."
    } else if (rand === 84) {
        clue = "Clue: A grove of fruit trees."
    } else if (rand === 85) {
        clue = "Clue: In the distance, the sound of a boulder rolling through forest, cracking trees, etc."
    } else if (rand === 86) {
        clue = "Clue: Smoke rising about two miles ahead. A lot of smoke, from a specific point."
    } else if (rand === 87) {
        clue = "Clue: A medium sized tree felled and placed over a river which is in full flow."
    } else if (rand === 88) {
        clue = "Clue: Picked mushrooms lying on a stump to dry."
    } else if (rand === 89) {
        clue = "Clue: Picked moss arranged in one area, possibly as a bed."
    } else if (rand === 90) {
        clue = "Clue: Huge spider web with humanoid belongings stuck to it."
    } else if (rand === 91) {
        clue = "Clue: Disembodied voices float on the breeze… what are they saying?"
    } else if (rand === 92) {
        clue = "Clue: If by water, you see the surface stir. If on land, you feel vibrations beneath your feet."
    } else if (rand === 93) {
        clue = "Clue: About 500 yards ahead, a flock of birds rises suddenly into the air as if something had disturbed them."
    } else if (rand === 94) {
        clue = "Clue: " + MinMaxRandomize(1, 4) + " corpses, all without heads."
    } else if (rand === 95) {
        clue = "Clue: Large boot tracks in mud."
    } else if (rand === 96) {
        clue = "Clue: Abandoned shack."
    } else if (rand === 97) {
        clue = "Clue: Lost / traumatized humanoid child who doesn't speak a word."
    } else if (rand === 98) {
        clue = "Clue: Empty cave, recently inhabited."
    } else if (rand === 99) {
        clue = "Clue: A bridge, either washed out or deliberately destroyed / burnt."
    } else {
        clue = "Clue: Magic item! Relevant to quest."
    }

    return clue
}

export default ClueRandomize
