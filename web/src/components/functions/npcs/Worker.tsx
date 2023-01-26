import AlignmentRandomize from "./shared/AlignmentRandomize"
import DispositionRandomize from "./shared/DispositionRandomize"
import EconomicStatusRandomize from "./shared/EconomicStatusRandomize"
import GenderRandomize from "./shared/GenderRandomize"
import ProfessionRandomize from "./shared/ProfessionRandomize"
import RaceRandomize from "./shared/RaceRandomize"

function Adventurer() {
    let adventurer = ""

    adventurer += RaceRandomize()

    adventurer += GenderRandomize()

    adventurer += AlignmentRandomize()

    adventurer += ProfessionRandomize()

    adventurer += DispositionRandomize()

    adventurer += EconomicStatusRandomize()

    return adventurer
}

export default Adventurer
