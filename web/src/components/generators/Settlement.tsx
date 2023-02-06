import MerchantRandomize from "./settlement/MerchantRandomize"
import RumourRandomize from "./settlement/RumourRandomize"
import SaveOnHistory from "./shared/SaveOnHistory"

function Settlement(param: number) {
    let res = ""

    switch (param) {
        case 1:
            res = "🚧 WIP"
            break
        case 2:
            res = MerchantRandomize()
            break
        case 3:
            res = RumourRandomize()
            break
    }

    return res
}

export default Settlement
