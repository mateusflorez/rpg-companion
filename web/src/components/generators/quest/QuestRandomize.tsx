import MinMaxRandomize from "../shared/MinMaxRandomize"

function QuestRandomize() {
    const rand = MinMaxRandomize(1, 100)
    let quest = ""

    if (rand < 5) {
        quest = "Problem: Unjust killing§Resultant quest: Revenge";
    } else if (rand > 4 && rand < 9) {
        quest = "Problem: Crime committed, criminal disappeared§Resultant quest: Apprehend / Bounty Hunt";
    } else if (rand > 8 && rand < 13) {
        quest = "Problem: Item lost§Resultant quest: Retrieval";
    } else if (rand > 12 && rand < 17) {
        quest = "Problem: Tyrant(s) threaten town / business / population (monster / humanoid) §Resultant quest: Repel / Sabotage / Deceive / Sabotage / Extort / Entrap";
    } else if (rand > 16 && rand < 21) {
        quest = "Problem: Environmental disturbance / Strange Weather / Infestation / Plague§Resultant quest: Investigate / Solve";
    } else if (rand > 20 && rand < 25) {
        quest = "Problem: Magical chaos / Curse§Resultant quest: Investigate / Lift curse / destroy magic";
    } else if (rand > 24 && rand < 29) {
        quest = "Problem: Kidnapping / Hostage situation§Resultant quest: Rescue / Recover";
    } else if (rand > 28 && rand < 33) {
        quest = "Problem: Adventurer left some time ago, but is lost§Resultant quest: Rescue";
    } else if (rand > 32 && rand < 37) {
        quest = "Problem: Something is rumoured, but undiscovered (Artefact, legendary place)§Resultant quest: Explore / Discover";
    } else if (rand > 36 && rand < 41) {
        quest = "Problem: Riches rumoured within secure, guarded place§Resultant quest: Loot";
    } else if (rand > 40 && rand < 45) {
        quest = "Problem: Invasion§Resultant quest: Repel / Divert";
    } else if (rand > 44 && rand < 49) {
        quest = "Problem: Person suspected of something§Resultant quest: Spy / Gather information";
    } else if (rand > 48 && rand < 53) {
        quest = "Problem: Important item / message / person needs transporting§Resultant quest: Transport / smuggle / escort";
    } else if (rand > 52 && rand < 57) {
        quest = "Problem: Nefarious / dangerous item being transported §Resultant quest: Waylay / Hijack";
    } else if (rand > 56 && rand < 61) {
        quest = "Problem: Dangerous item exposed / up for grabs§Resultant quest: Find / Destroy";
    } else if (rand > 60 && rand < 65) {
        quest = "Problem: Corrupt noble§Resultant quest: Investigate / Implicate / Incriminate / Expose";
    } else if (rand > 64 && rand < 69) {
        quest = "Problem: Commodity shortage (goods, workforce)§Resultant quest: Transport supplies";
    } else if (rand > 68 && rand < 72) {
        quest = "Problem: Mystery unresolved§Resultant quest: Research / Explore / Decode";
    } else if (rand > 72 && rand < 77) {
        quest = "Problem: Adventurer thrown into life-threatening situation (environmental or otherwise) §Resultant quest: Survive";
    } else if (rand > 76 && rand < 81) {
        quest = "Problem: Worthy creature's life threatened (humanoid / animal / monster) §Resultant quest: Protect / eliminate threat";
    } else if (rand > 80 && rand < 85) {
        quest = "Problem: Execution of innocent party planned§Resultant quest: Prevent";
    } else if (rand > 84 && rand < 89) {
        quest = "Problem: Siege (anything from a small party of goblins surrounding a farmhouse to an army of Imperial Blades surrounding a city!) §Resultant quest: Break";
    } else if (rand > 88 && rand < 93) {
        quest = "Problem: Huge battle about to erupt§Resultant quest: Negotiate / Prepare / Mediate / Participate";
    } else if (rand > 92 && rand < 97) {
        quest = "Problem: Spiritually beneficial place rumoured§Resultant quest: Visit / Gain boon";
    } else {
        quest = "Problem: Foolish individual committed innocent blunder§Resultant quest: PC hired to conceal evidence / Return item / Placate";
    }

    return quest
}

export default QuestRandomize
