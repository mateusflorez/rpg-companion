import MinMaxRandomize from "../../shared/MinMaxRandomize"
import StairRandomize from "./StairRandomize"


function ArchitectureRandomize() {
    const rand = MinMaxRandomize(1, 20)
    let architecture = ""

    if (rand === 1) {
        architecture = "Statue"
    } else if (rand === 2) {
        architecture = "Series of alcoves."
    } else if (rand === 3) {
        architecture = "Fountain."
    } else if (rand === 4) {
        architecture = MinMaxRandomize(1, 4) + " pools."
    } else if (rand === 5) {
        architecture = "Hole in floor."
    } else if (rand === 6) {
        architecture = "Underground terrarium."
    } else if (rand === 7) {
        architecture = "Pillars along each side. Anything hiding there?."
    } else if (rand === 8) {
        architecture = "Catacombs."
    } else if (rand === 9) {
        architecture = "Puzzle of some sort (int check required)."
    } else if (rand === 10) {
        architecture = "Sacrificial plinth."
    } else if (rand === 11) {
        architecture = "Temple / shrine."
    } else if (rand === 12) {
        architecture = "Guard post."
    } else if (rand === 13) {
        architecture = "Trapdoor with ladder. " + StairRandomize()
    } else if (rand === 14) {
        architecture = "Underground stream."
    } else if (rand === 15) {
        architecture = "Natural cavern."
    } else if (rand === 16) {
        architecture = "Ventilation shaft."
    } else if (rand === 17) {
        architecture = "Crystal growth."
    } else if (rand === 18) {
        architecture = "Campsite, abandoned."
    } else if (rand === 19) {
        architecture = "Portal. Takes you to another, random part of the dungeon."
    } else {
        architecture = "Edible Fungi / Moss Farm."
    }

    return architecture
}

export default ArchitectureRandomize
