import MinMaxRandomize from "../shared/MinMaxRandomize";
import AdventurerClassRandomize from "./shared/AdventurerClassRandomize";
import AlignmentRandomize from "./shared/AlignmentRandomize";
import DispositionRandomize from "./shared/DispositionRandomize";
import EconomicStatusRandomize from "./shared/EconomicStatusRandomize";
import GenderRandomize from "./shared/GenderRandomize";
import ProfessionRandomize from "./shared/ProfessionRandomize";
import RaceRandomize from "./shared/RaceRandomize";


function RandomNpc() {
    let npc = ""
    const rand = MinMaxRandomize(1, 100);

    npc += RaceRandomize();

    npc += GenderRandomize();

    npc += AlignmentRandomize();

    if (rand < 26) {
        npc += "Commoner (Unemployed).";
    } else if (rand > 25 && rand < 91) {
        npc += ProfessionRandomize();
    } else {
        npc += AdventurerClassRandomize();
    }

    npc += DispositionRandomize();

    npc += EconomicStatusRandomize();

    return npc
}

export default RandomNpc
