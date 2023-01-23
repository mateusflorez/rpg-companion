import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getCharacterRoute } from '../../utils/APIRoutes';

function CharacterSheet() {
    const { id } = useParams();

    const [character, setCharacter] = useState<any>([])

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
    }, [character])

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row items-center justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">{character.name}</h1>
                <div className='grid grid-cols-3 justify-end gap-2 items-center w-3/6 pl-2'>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Class:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.charClass} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Level:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.level} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Background:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.background} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Race:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.race} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Alignment:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none overflow-ellipsis" value={character.alignment} >
                        </input>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <label className='text-zinc-500 text-sm'>Experience:</label>
                        <input className="text-zinc-500 text-sm font-bold flex flex-col items-center justify-center rounded-lg bg-transparent w-full focus:outline-none" value={character.experience} >
                        </input>
                    </div>
                </div>
            </div>
            <div className='my-8 grid grid-cols-2 gap-2'>
                <div>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.strength} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.dexterity} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.constitution} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.intelligence} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.wisdom} >
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-20 focus:outline-none text-4xl" value={character.attributes && character.attributes.charisma} >
                            </input>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 gap-10 px-3 -mt-4'>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.strength) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.dexterity) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.constitution) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.intelligence) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.wisdom) - 10) / 2)}>
                            </input>
                        </div>
                        <div className=" p-[0.1rem] w-full bg-orange-600 rounded-lg overflow-hidden h-min">
                            <input className="text-center text-white font-bold flex flex-col items-center justify-center rounded-lg bg-cloudy w-full h-8 focus:outline-none text-xl" value={character.attributes && Math.floor((parseInt(character.attributes.charisma) - 10) / 2)}>
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterSheet
