import MinMaxRandomize from "../../shared/MinMaxRandomize"

function LandscapeRandomize() {
    const rand = MinMaxRandomize(1, 100);
    var landscape = "";

    if (rand === 1) {
        landscape = "Sinkhole.";
    } else if (rand === 2) {
        landscape = "Crevasse caused by earthquake.";
    } else if (rand === 3) {
        landscape = "Geyser / Hot Springs.";
    } else if (rand === 4) {
        landscape = "Landslide.";
    } else if (rand === 5) {
        landscape = "Waterfall.";
    } else if (rand === 6) {
        landscape = "Cave Forest.";
    } else if (rand === 7) {
        landscape = "Volcano.";
    } else if (rand === 8) {
        landscape = "Lake.";
    } else if (rand === 9) {
        landscape = "Interesting rock formations (caused by lava flow?).";
    } else if (rand === 10) {
        landscape = "Manmade tunnel.";
    } else if (rand === 11) {
        landscape = "Crater (meteor?).";
    } else if (rand === 12) {
        landscape = "Tar Pit.";
    } else if (rand === 13) {
        landscape = "River source / spring / river going underground.";
    } else if (rand === 14) {
        landscape = "Quicksand (Perception check to notice?).";
    } else if (rand === 15) {
        landscape = "Skull / Face like formation of rocks.";
    } else if (rand === 16) {
        landscape = "Creature-shaped rocks. Basilisk victim?";
    } else if (rand === 17) {
        landscape = "Petrified forest.";
    } else if (rand === 18) {
        landscape = "A lone pillar with runes.";
    } else if (rand === 19) {
        landscape = "Hanging tree, with noose.";
    } else {
        landscape = MinMaxRandomize(1, 4) + " cairns of stone, arranged symmetrically.";
    }

    return landscape
}

export default LandscapeRandomize
