import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer, ToastOptions } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { newCharacterRoute } from "../../utils/APIRoutes"

function CharacterBuilder() {
    const toastOptions: ToastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: true,
        theme: 'dark'
    }

    const navigate = useNavigate()

    const [values, setValues] = useState({
        userId: "",
        name: "",
        race: "",
        charClass: "",
        level: 0,
        experience: 0,
        alignment: "",
        background: "",
        hitPoints: {
            "totalHP": 0,
            "tempHP": 0,
            "currentHP": 0
        },
        deathSaves: {
            "success1": false,
            "success2": false,
            "success3": false,
            "failure1": false,
            "failure2": false,
            "failure3": false
        },
        inspiration: false,
        proficiency: 0,
        armorClass: 0,
        initiative: 0,
        speed: 0,
        passivePerception: 0,
        attributes: {
            "strength": 0,
            "strengthst": false,
            "dexterity": 0,
            "dexterityst": false,
            "constitution": 0,
            "constitutionst": false,
            "intelligence": 0,
            "intelligencest": false,
            "wisdom": 0,
            "wisdomst": false,
            "charisma": 0,
            "charismast": false
        },
        skills: {
            "athletics": false,
            "acrobatics": false,
            "stealth": false,
            "sleightOfHand": false,
            "arcana": false,
            "history": false,
            "investigation": false,
            "nature": false,
            "religion": false,
            "insight": false,
            "animalHandling": false,
            "medicine": false,
            "perception": false,
            "survival": false,
            "performance": false,
            "deception": false,
            "intimidation": false,
            "persuasion": false
        },
    })

    useEffect(() => {
        const userString = localStorage.getItem("user")
        if (userString) {
            setValues({
                ...values, userId: (JSON.parse(userString)).id
            })
        }
    }, []);

    function handleChange(e: any) {
        if (e.target.name === 'totalHP') {
            setValues({
                ...values, hitPoints: {
                    "totalHP": e.target.value,
                    "tempHP": 0,
                    "currentHP": e.target.value
                }
            })
        }
        else if (e.target.name === 'strength' || e.target.name === 'dexterity' || e.target.name === 'constitution' || e.target.name === 'intelligence' || e.target.name === 'wisdom' || e.target.name === 'charisma') {
            setValues({
                ...values, attributes: {
                    ...values.attributes,
                    [e.target.name]: e.target.value
                }
            })
        }
        else if (e.target.name === 'strengthst' || e.target.name === 'dexterityst' || e.target.name === 'constitutionst' || e.target.name === 'intelligencest' || e.target.name === 'wisdomst' || e.target.name === 'charismast') {
            setValues({
                ...values, attributes: {
                    ...values.attributes,
                    [e.target.name]: e.target.checked
                }
            })
        } else if (e.target.name === 'level' || e.target.name === 'experience' || e.target.name === 'proficiency' || e.target.name === 'armorClass' || e.target.name === 'initiative' || e.target.name === 'speed' || e.target.name === 'passivePerception') {
            setValues({ ...values, [e.target.name]: parseInt(e.target.value) })
        }
        else {
            setValues({ ...values, [e.target.name]: e.target.value })
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if (handleValidation()) {
            const response = await axios.post(newCharacterRoute, {
                values
            })
            console.log(response.status)
            if (response.status !== 201) {
                toast.error(response.data.message, toastOptions)
            } else {
                navigate("/characters")
            }
        }
    }

    function handleValidation() {
        if (values.name === "") {
            toast.error("Character name is required.", toastOptions)
            return false
        }
        return true
    }

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">Character builder</h1>
            </div>
            <div className="my-8 pt-1 bg-orange-600 rounded-lg overflow-hidden mx-8">
                <form className="flex flex-col gap-8 rounded-t-lg bg-cloudy py-12 px-20" onSubmit={(e) => handleSubmit(e)}>
                    <div className="w-1/2 pr-6">
                        <input type="text" placeholder="Character name" name="name" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="w-1/2 pr-6">
                        <div className="select-wrapper text-white w-full">
                            <select name="race" id="race" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)}>
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
                            <select name="charClass" id="charClass" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)}>
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
                        <input type="number" placeholder="Level" name="level" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="w-1/2 pr-6">
                        <input type="number" placeholder="Experience" name="experience" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="select-wrapper text-white w-full">
                            <select name="alignment" id="alignment" className="text-white bg-zinc-900 p-4 w-full rounded h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)}>
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
                        <input type="text" placeholder="Background" name="background" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <input type="number" placeholder="Hit points" name="totalHP" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                        <input type="number" placeholder="Proficiency" name="proficiency" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                        <input type="number" placeholder="Armor class" name="armorClass" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <input type="number" placeholder="Initiative" name="initiative" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                        <input type="number" placeholder="Speed" name="speed" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                        <input type="number" placeholder="Passive perception" name="passivePerception" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Strength" name="strength" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="strengthst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Dexterity" name="dexterity" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="dexterityst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Constitution" name="constitution" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="constitutionst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Intelligence" name="intelligence" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="intelligencest" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-start gap-8 w-full">
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Wisdom" name="wisdom" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="wisdomst" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center gap-4">
                            <div className="w-full">
                                <input type="number" placeholder="Charisma" name="charisma" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-14 focus:outline-none focus:bg-zinc-600 transition" onChange={(e) => handleChange(e)} />
                            </div>
                            <div>
                                <input type="checkbox" name="charismast" className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-transparent" onChange={(e) => handleChange(e)} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 pr-6">
                        <button type="submit" className="w-full bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Save</button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    )
}

export default CharacterBuilder
