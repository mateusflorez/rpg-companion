import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCharactersRoute } from "../../utils/APIRoutes"

function Characters() {
    const [characters, setCharacters] = useState<any>([])

    useEffect(() => {
        const getAllCharacters = async () => {
            const userString = localStorage.getItem("user")
            if (userString) {
                const response = await axios.get(`${getCharactersRoute}/${(JSON.parse(userString)).id}`)
                setCharacters(response.data)
            }
        }
        getAllCharacters()
    }, [])

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">My characters</h1>
                <Link to={"/character-builder"}><button className="w-60 bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Create a character</button></Link>
            </div>
            <div className="pt-8 flex flex-row justify-center gap-8">
                {
                    characters && characters.map((character: any, index: any) => {
                        return (
                            <div className="pt-1 bg-orange-600 rounded-lg w-full overflow-hidden">
                                <div key={index} className='bg-cloudy px-4 py-4 rounded-t transition hover:bg-rainy' >
                                    <h1 className="text-white font-semibold text-xl block">{character.name}</h1>
                                    <div>
                                        <p className=" text-zinc-500 text-sm">
                                            Level {character.level} | {character.race ? character.race : "No race selected"} | {character.charClass ? character.charClass : "No class selected"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Characters
