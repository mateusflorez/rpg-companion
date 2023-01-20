import { Link } from "react-router-dom"

function Characters() {
    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">My characters</h1>
                <Link to={"/character-builder"}><button className="w-60 bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Create a character</button></Link>
            </div>
        </div>
    )
}

export default Characters
