import AlignmentRandomize from "./shared/AlignmentRandomize"
import DispositionRandomize from "./shared/DispositionRandomize"
import EconomicStatusRandomize from "./shared/EconomicStatusRandomize"
import GenderRandomize from "./shared/GenderRandomize"
import ProfessionRandomize from "./shared/ProfessionRandomize"
import RaceRandomize from "./shared/RaceRandomize"

function Worker() {
    let worker = ""

    worker += RaceRandomize()

    worker += GenderRandomize()

    worker += AlignmentRandomize()

    worker += ProfessionRandomize()

    worker += DispositionRandomize()

    worker += EconomicStatusRandomize()

    return worker
}

export default Worker
