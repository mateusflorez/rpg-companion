import MinMaxRandomize from "../shared/MinMaxRandomize"


function TradesRandomize() {
    var rand = MinMaxRandomize(1, 20)
    let trades = ""

    trades = "The settlement has the following trades:";
    if (rand > 5) {
        trades += "§• Inn / Tavern, with " + MinMaxRandomize(1, 20) + " rooms. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 9) {
        trades += "§• Adventuring Supplies. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 8) {
        trades += "§• Animals and Mounts. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 14) {
        trades += "§• Books and Maps. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 17) {
        trades += "§• Jewelry and Gem trader. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 13) {
        trades += "§• Armourer. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Bank. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 14) {
        trades += "§• Tinkerer / Fine smith. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 10) {
        trades += "§• Tailor. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Potions, poisons, herbs. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Religious idols & Blessings. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 9) {
        trades += "§• Food & drink seller. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 11) {
        trades += "§• Temple (also rituals, funerals, name - giving, weddings). " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 16) {
        trades += "§• Spell tomes and scrolls. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Thieving supplies. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Weapons Shop. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Vehicles and transportation. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Adventurer's Guild. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 18) {
        trades += "§• Magic Items. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 7) {
        trades += "§• Blacksmith. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 17) {
        trades += "§• Necromancy / Resurrection. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 16) {
        trades += "§• Couriers. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Brothel. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 12) {
        trades += "§• Land Sales. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 9) {
        trades += "§• Carpenter / Cooper / Cartwright. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Entertainer's Guild. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 11) {
        trades += "§• Healer / Physician. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Shipping Contracts / Boat building(must be coastal). " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 15) {
        trades += "§• Worker’s Union (any type). " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 11) {
        trades += "§• Stonemason. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 17) {
        trades += "§• University. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 16) {
        trades += "§• Mercenaries. " + merchantQualityRandomizer();
    }
    rand = MinMaxRandomize(1, 20);
    if (rand > 16) {
        trades += "§• Animal trainer. " + merchantQualityRandomizer();
    }

    return trades
}

export default TradesRandomize
