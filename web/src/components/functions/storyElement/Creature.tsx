import MinMaxRandomize from "../shared/MinMaxRandomize"


function Creature() {
    const rand = MinMaxRandomize(1, 40)
    let creature = ""

    if (rand < 3) {
        creature += "Monster!";
    } else if (rand === 3) {
        creature += "Bear.";
    } else if (rand === 4) {
        creature += "Cat.";
    } else if (rand === 5) {
        creature += "Dire Wolf.";
    } else if (rand === 6) {
        creature += "Dog.";
    } else if (rand === 7) {
        creature += "Draft Horse.";
    } else if (rand === 8) {
        creature += "Eagle.";
    } else if (rand === 9) {
        creature += "Elephant.";
    } else if (rand === 10) {
        creature += "Elk.";
    } else if (rand === 11) {
        creature += "Flying Snake.";
    } else if (rand === 12) {
        creature += "Ape.";
    } else if (rand === 13) {
        creature += "Giant Ape.";
    } else if (rand === 14) {
        creature += "Giant Badger.";
    } else if (rand === 15) {
        creature += "Giant Boar.";
    } else if (rand === 16) {
        creature += "Giant Eagle.";
    } else if (rand === 17) {
        creature += "Giant Elk.";
    } else if (rand === 18) {
        creature += "Giant Fire Beetle.";
    } else if (rand === 19) {
        creature += "Giant Frog.";
    } else if (rand === 20) {
        creature += "Giant Lizard.";
    } else if (rand === 21) {
        creature += "Giant Owl.";
    } else if (rand === 22) {
        creature += "Giant Rat.";
    } else if (rand === 23) {
        creature += "Giant Spider.";
    } else if (rand === 24) {
        creature += "Goat.";
    } else if (rand === 25) {
        creature += "Hawk.";
    } else if (rand === 26) {
        creature += "Mastiff.";
    } else if (rand === 27) {
        creature += "Mule.";
    } else if (rand === 28) {
        creature += "Owl.";
    } else if (rand === 29) {
        creature += "Riding Horse.";
    } else if (rand === 30) {
        creature += "Panther.";
    } else if (rand === 31) {
        creature += "Poisonous Snake.";
    } else if (rand === 32) {
        creature += "Pony.";
    } else if (rand === 33) {
        creature += "Rat.";
    } else if (rand === 34) {
        creature += "Raven.";
    } else if (rand === 35) {
        creature += "Swarm of Insects.";
    } else if (rand === 36) {
        creature += "Swarm of rats.";
    } else if (rand === 37) {
        creature += "Swarm of ravens.";
    } else if (rand === 38) {
        creature += "Vulture.";
    } else if (rand === 39) {
        creature += "Weasel.";
    } else {
        creature += "Wolf.";
    }

    return creature
}

export default Creature
