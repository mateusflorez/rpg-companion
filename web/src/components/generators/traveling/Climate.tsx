import MinMaxRandomize from "../shared/MinMaxRandomize"


function Climate() {
    const rand = MinMaxRandomize(1, 20)
    let climate = ""

    if (rand === 1) {
        climate = "Sleet / Blizzard"
    } else if (rand > 1 && rand < 5) {
        climate = "Rain"
    } else if (rand > 4 && rand < 9) {
        climate = "Overcast"
    } else if (rand > 8 && rand < 12) {
        climate = "Clear Skies"
    } else if (rand > 11 && rand < 19) {
        climate = "Clear / Hot"
    } else {
        climate = "Very Hot"
    }

    return climate
}

export default Climate
