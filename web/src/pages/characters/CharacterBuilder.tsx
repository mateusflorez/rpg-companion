import { Link } from "react-router-dom"

function CharacterBuilder() {

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">Character builder</h1>
            </div>
            <div className="my-8 pt-1 bg-orange-600 rounded-lg overflow-hidden mx-8">
                <form className="flex flex-col gap-8 rounded-t-lg bg-cloudy py-12 px-20">
                    <div className="w-1/2 pr-6">
                        <input type="text" required placeholder="Character name" name="name" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="w-1/2 pr-6">
                        <div className="select-wrapper text-white w-full">
                            <select name="race" id="race" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition">
                                <option disabled selected>Select the race</option>
                                <option value={"Dwarf"}>Dwarf</option>
                                <option value={"Elf"}>Elf</option>
                                <option value={"Halfling"}>Halfling</option>
                                <option value={"Human"}>Human</option>
                                <option value={"Dragonborn"}>Dragonborn</option>
                                <option value={"Gnome"}>Gnome</option>
                                <option value={"Half-Elf"}>Half-Elf</option>
                                <option value={"Half-Orc"}>Half-Orc</option>
                                <option value={"Tiefling"}>Tiefling</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="select-wrapper text-white w-full">
                            <select name="charClass" id="charClass" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition">
                                <option disabled selected>Select the class</option>
                                <option value={"Barbarian"}>Barbarian</option>
                                <option value={"Bard"}>Bard</option>
                                <option value={"Cleric"}>Cleric</option>
                                <option value={"Druid"}>Druid</option>
                                <option value={"Fighter"}>Fighter</option>
                                <option value={"Monk"}>Monk</option>
                                <option value={"Paladin"}>Paladin</option>
                                <option value={"Ranger"}>Ranger</option>
                                <option value={"Rogue"}>Rogue</option>
                                <option value={"Sorcerer"}>Sorcerer</option>
                                <option value={"Warlock"}>Warlock</option>
                                <option value={"Wizard"}>Wizard</option>
                            </select>
                        </div>
                        <input type="number" required placeholder="Level" name="level" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="w-1/2 pr-6">
                        <input type="number" required placeholder="Experience" name="experience" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="select-wrapper text-white w-full">
                            <select name="alignment" id="alignment" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition">
                                <option disabled selected>Select the alignment</option>
                                <option value={"Lawful Good"}>Lawful Good</option>
                                <option value={"Neutral Good"}>Neutral Good</option>
                                <option value={"Chaotic Good"}>Chaotic Good</option>
                                <option value={"Lawful Neutral"}>Lawful Neutral</option>
                                <option value={"Neutral"}>Neutral</option>
                                <option value={"Chaotic Neutral"}>Chaotic Neutral</option>
                                <option value={"Lawful Evil"}>Lawful Evil</option>
                                <option value={"Neutral Evil"}>Neutral Evil</option>
                                <option value={"Chaotic Evil"}>Chaotic Evil</option>
                            </select>
                        </div>
                        <input type="text" required placeholder="Background" name="background" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <input type="number" required placeholder="Hit points" name="totalHP" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                        <input type="number" required placeholder="Proficiency" name="proficiency" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                        <input type="number" required placeholder="Armor class" name="armorClass" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <input type="number" required placeholder="Initiative" name="initiative" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                        <input type="number" required placeholder="Speed" name="speed" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                        <input type="number" required placeholder="Passive perception" name="passivePerception" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Strength" name="strength" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="strengthst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Dexterity" name="dexterity" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="dexterityst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Constitution" name="constitution" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="constitutionst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Intelligence" name="intelligence" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="intelligencest" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Wisdom" name="wisdom" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="wisdomst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" required placeholder="Charisma" name="charisma" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" />
                            </div>
                            <div>
                                <input type="checkbox" name="charismast" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 pr-6">
                        <button type="submit" className="w-full bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Save</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default CharacterBuilder
