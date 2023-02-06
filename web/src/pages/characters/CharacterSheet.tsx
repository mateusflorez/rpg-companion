import { Checkbox } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getCharacterRoute, updateCharacterRoute } from '../../utils/APIRoutes';
import { HPFIELDS, ATTRIBUTEFIELDS, ATTRIBUTESTFIELDS, NUMBERFIELDS, BOOLEANFIELDS } from '../../utils/Constants';

function CharacterSheet() {
    const { id } = useParams();

    const [character, setCharacter] = useState<any>([])

    const userString = localStorage.getItem("user")

    useEffect(() => {
        const getCharacter = async () => {
            const userString = localStorage.getItem("user")
            if (userString) {
                const response = await axios.get(`${getCharacterRoute}/${(JSON.parse(userString)).id}/${id}`)
                setCharacter(response.data[0])
                console.log(character)
            }
        }
        getCharacter()
    }, [])

    useEffect(() => {
        updateCharacter()
    }, [character])

    async function handleChange(e: any) {
        if (HPFIELDS.includes(e.target.name)) {
            setCharacter({
                ...character, hitPoints: {
                    ...character.hitPoints,
                    [e.target.name]: e.target.value,
                }
            })
        }
        else if (ATTRIBUTEFIELDS.includes(e.target.name)) {
            setCharacter({
                ...character, attributes: {
                    ...character.attributes,
                    [e.target.name]: e.target.value
                }
            })
        }
        else if (ATTRIBUTESTFIELDS.includes(e.target.name)) {
            setCharacter({
                ...character, attributes: {
                    ...character.attributes,
                    [e.target.name]: e.target.checked
                }
            })
        } else if (BOOLEANFIELDS.includes(e.target.name)) {
            setCharacter({ ...character, [e.target.name]: e.target.checked })
        } else if (NUMBERFIELDS.includes(e.target.name)) {
            setCharacter({ ...character, [e.target.name]: parseInt(e.target.value) })
        }
        else {
            setCharacter({ ...character, [e.target.name]: e.target.value })
        }
    }

    async function updateCharacter() {
        if (userString && character.id)
            await axios.put(`${updateCharacterRoute}/${(JSON.parse(userString)).id}/${character.id}`, { character })
    }

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-col items-center justify-start lg:justify-between w-full gap-4 lg:flex-row" >
                <input type='text' name='name' className="text-white font-bold text-4xl bg-transparent focus:outline-none -ml-28 lg:-ml-0" value={character.name} onChange={(e) => handleChange(e)}></input>
                <div className='grid grid-cols-3 justify-end gap-2 items-center lg:w-3/6 pl-2'>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Class:</label>
                        <div className="select-wrapper text-transparent w-full -mt-[0.2rem]">
                            <select name="charClass" id="charClass" className="text-zinc-500 text-sm font-bold bg-transparent w-full rounded focus:outline-none  transition" onChange={(e) => handleChange(e)}>
                                <option disabled selected={character.charClass === "" ? true : false}>No class</option>
                                <option value={"Barbarian"} selected={character.charClass === "Barbarian" ? true : false}>Barbarian</option>
                                <option value={"Bard"} selected={character.charClass === "Bard" ? true : false}>Bard</option>
                                <option value={"Cleric"} selected={character.charClass === "Cleric" ? true : false}>Cleric</option>
                                <option value={"Druid"} selected={character.charClass === "Druid" ? true : false}>Druid</option>
                                <option value={"Fighter"} selected={character.charClass === "Fighter" ? true : false}>Fighter</option>
                                <option value={"Monk"} selected={character.charClass === "Monk" ? true : false}>Monk</option>
                                <option value={"Paladin"} selected={character.charClass === "Paladin" ? true : false}>Paladin</option>
                                <option value={"Ranger"} selected={character.charClass === "Ranger" ? true : false}>Ranger</option>
                                <option value={"Rogue"} selected={character.charClass === "Rogue" ? true : false}>Rogue</option>
                                <option value={"Sorcerer"} selected={character.charClass === "Sorcerer" ? true : false}>Sorcerer</option>
                                <option value={"Warlock"} selected={character.charClass === "Warlock" ? true : false}>Warlock</option>
                                <option value={"Wizard"} selected={character.charClass === "Wizard" ? true : false}>Wizard</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Level:</label>
                        <input type='number' name='level' onChange={(e) => handleChange(e)} className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.level} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Background:</label>
                        <input type='text' name='background' onChange={(e) => handleChange(e)} className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.background} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Race:</label>
                        <div className="select-wrapper text-transparent w-full -mt-[0.2rem]">
                            <select name="race" id="race" className="text-zinc-500 text-sm font-bold bg-transparent w-full rounded focus:outline-none  transition" onChange={(e) => handleChange(e)}>
                                <option disabled selected={character.race === "" ? true : false}>Select the race</option>
                                <option value={"Dwarf"} selected={character.race === "Dwarf" ? true : false}>Dwarf</option>
                                <option value={"Elf"} selected={character.race === "Elf" ? true : false}>Elf</option>
                                <option value={"Halfling"} selected={character.race === "Halfling" ? true : false}>Halfling</option>
                                <option value={"Human"} selected={character.race === "Human" ? true : false}>Human</option>
                                <option value={"Dragonborn"} selected={character.race === "Dragonborn" ? true : false}>Dragonborn</option>
                                <option value={"Gnome"} selected={character.race === "Gnome" ? true : false}>Gnome</option>
                                <option value={"Half-Elf"} selected={character.race === "Half-Elf" ? true : false}>Half-Elf</option>
                                <option value={"Half-Orc"} selected={character.race === "Half-Orc" ? true : false}>Half-Orc</option>
                                <option value={"Tiefling"} selected={character.race === "Tiefling" ? true : false}>Tiefling</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Alignment:</label>
                        <div className="select-wrapper text-transparent w-full -mt-[0.2rem]">
                            <select name="alignment" id="alignment" className="text-zinc-500 text-sm font-bold bg-transparent w-full rounded focus:outline-none  transition" onChange={(e) => handleChange(e)}>
                                <option disabled selected={character.alignment === "" ? true : false}>No alignment</option>
                                <option value={"Lawful Good"} selected={character.alignment === "Lawful Good" ? true : false}>Lawful Good</option>
                                <option value={"Neutral Good"} selected={character.alignment === "Neutral Good" ? true : false}>Neutral Good</option>
                                <option value={"Chaotic Good"} selected={character.alignment === "Chaotic Good" ? true : false}>Chaotic Good</option>
                                <option value={"Lawful Neutral"} selected={character.alignment === "Lawful Neutral" ? true : false}>Lawful Neutral</option>
                                <option value={"Neutral"} selected={character.alignment === "Neutral" ? true : false}>Neutral</option>
                                <option value={"Chaotic Neutral"} selected={character.alignment === "Chaotic Neutral" ? true : false}>Chaotic Neutral</option>
                                <option value={"Lawful Evil"} selected={character.alignment === "Lawful Evil" ? true : false}>Lawful Evil</option>
                                <option value={"Neutral Evil"} selected={character.alignment === "Neutral Evil" ? true : false}>Neutral Evil</option>
                                <option value={"Chaotic Evil"} selected={character.alignment === "Chaotic Evil" ? true : false}>Chaotic Evil</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Experience:</label>
                        <input type='number' name='experience' onChange={(e) => handleChange(e)} className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.experience} >
                        </input>
                    </div>
                </div>
            </div>
            <div className='my-8 grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='strength' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.strength} onChange={(e) => handleChange(e)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='dexterity' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.dexterity} onChange={(e) => handleChange(e)} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='constitution' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.constitution} onChange={(e) => handleChange(e)} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='intelligence' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.intelligence} onChange={(e) => handleChange(e)} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='wisdom' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.wisdom} onChange={(e) => handleChange(e)} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input type="number" name='charisma' className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.charisma} onChange={(e) => handleChange(e)} >
                            </input>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-8 px-2 -mt-20'>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Str</div>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Dex</div>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Const</div>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Int</div>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Wis</div>
                        <div className='text-zinc-500 text-xs text-center font-semibold h-fit'>Cha</div>
                    </div>
                    <div className='grid grid-cols-6 gap-10 px-3 mt-12'>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.strength) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.dexterity) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.constitution) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.intelligence) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.wisdom) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input disabled className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.charisma) - 10) / 2)}>
                            </input>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-[19%_19%_17%_45%] gap-4'>
                    <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-28">
                        <div className='grid grid-rows-3 bg-cloudy h-full rounded-lg items-center justify-center'>
                            <span className='text-zinc-500 font-bold text-sm flex flex-row justify-center items-center'>Proficiency</span>
                            <div className='grid grid-cols-2 w-full'>
                                <span className='text-white font-bold text-3xl flex flex-row justify-end'>+</span>
                                <input type="number" name='proficiency' className="text-left text-white font-bold flex flex-col bg-transparent focus:outline-none text-3xl" value={character.attributes && character.proficiency} onChange={(e) => handleChange(e)} >
                                </input>
                            </div>
                            <span className='text-zinc-500 font-bold text-sm flex flex-row justify-center items-center'>Bônus</span>
                        </div>
                    </div>
                    <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-28">
                        <div className='grid grid-rows-3 bg-cloudy h-full rounded-lg items-center justify-center'>
                            <span className='text-zinc-500 font-bold text-sm flex flex-row justify-center items-center'>Walking</span>
                            <div className='grid grid-cols-2 w-full'>
                                <input type="number" name='speed' className="text-right text-white font-bold flex flex-col bg-transparent focus:outline-none text-3xl" value={character.attributes && character.speed} onChange={(e) => handleChange(e)} >
                                </input>
                                <span className='text-white font-bold text-xl flex flex-row justify-start items-end'>mts</span>
                            </div>
                            <span className='text-zinc-500 font-bold text-sm flex flex-row justify-center items-center'>Speed</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-col bg-cloudy rounded-lg items-center justify-center h-20'>
                            <Checkbox
                                checked={character.inspiration ? true : false}
                                onChange={(e) => handleChange(e)}
                                name='inspiration'
                                style={{
                                    color: "#EA580B"
                                }}
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 40 }
                                }}
                            />
                            <span className='text-zinc-500 font-bold text-xs flex flex-row justify-center items-center'>Inspiration</span>
                        </div>
                    </div>
                    <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-28">
                        <div className='flex flex-col gap-1 bg-cloudy h-full rounded-lg items-center justify-center px-6'>
                            <h1 className='text-center text-zinc-500 font-bold text-sm'>Hit points</h1>
                            <div className='flex flex-row gap-9 w-full'>
                                <h1 className='text-zinc-500 font-bold bg-transparent text-sm w-1/3'>Current</h1>
                                <h1 className='text-zinc-500 font-bold bg-transparent text-sm w-1/3'>Total</h1>
                                <h1 className='text-zinc-500 font-bold bg-transparent text-sm w-1/3'>temp</h1>
                            </div>
                            <div className='flex flex-row items-center w-full'>
                                <input type="number" name='currentHP' className="text-right text-white font-bold bg-transparent w-1/3 focus:outline-none text-3xl" value={character.hitPoints && character.hitPoints.currentHP} onChange={(e) => handleChange(e)} >
                                </input>
                                <h1 className='text-white font-bold bg-transparent text-3xl'>/</h1>
                                <input type="number" name='totalHP' className="text-left text-white font-bold bg-transparent w-1/3 focus:outline-none text-3xl" value={character.hitPoints && character.hitPoints.totalHP} onChange={(e) => handleChange(e)} >
                                </input>

                                <input type="number" name='tempHP' className="text-right text-white font-bold bg-transparent w-1/3 focus:outline-none text-3xl" value={character.hitPoints && character.hitPoints.tempHP} onChange={(e) => handleChange(e)} >
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet
