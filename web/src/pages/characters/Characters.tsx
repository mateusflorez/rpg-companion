import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deleteCharacterRoute, getCharactersRoute } from "../../utils/APIRoutes"
import { AiFillDelete } from "react-icons/ai"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

function Characters() {
    const MySwal = withReactContent(Swal)

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
    }, [characters])

    function deleteButton(character: any) {
        const userString = localStorage.getItem("user")

        MySwal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this character!",
            icon: "warning",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'Cancel',
            confirmButtonColor: '#EA580C',
            denyButtonColor: '#6B6B5B'
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    if (userString)
                        await axios.delete(`${deleteCharacterRoute}/${(JSON.parse(userString)).id}/${character.id}`)
                    return MySwal.fire({
                        text: "Poof! Your character has been deleted!",
                        icon: "success",
                        confirmButtonColor: '#EA580C'
                    })
                } else {
                    return MySwal.fire({
                        text: "Your character is safe!",
                        icon: "info",
                        confirmButtonColor: '#EA580C'
                    })
                }
            })
    }

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">My characters</h1>
                <Link to={"/character-builder"}><button className="w-60 bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Create a character</button></Link>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-8">
                {
                    characters && characters.map((character: any, index: any) => {
                        return (
                            <Link key={index} to={`/character-sheet/${character.id}`} >
                                <div className="pt-1 bg-orange-600 rounded-lg w-full overflow-hidden">
                                    <div className='bg-cloudy px-4 py-4 rounded-t h-full transition hover:bg-rainy' >
                                        <div className="flex flex-row justify-between pb-2">
                                            <h1 className="text-white font-semibold text-xl block">{character.name}</h1>
                                            <button onClick={() => { deleteButton(character) }}>
                                                <AiFillDelete className="text-orange-600 text-xl hover:text-orange-900" />
                                            </button>
                                        </div>
                                        <div>
                                            <p className=" text-zinc-500 text-sm">
                                                Level {character.level} | {character.race ? character.race : "No race selected"} | {character.charClass ? character.charClass : "No class selected"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link >
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Characters
