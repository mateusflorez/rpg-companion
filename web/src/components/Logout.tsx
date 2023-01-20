import { useNavigate } from "react-router-dom"
import { BiPowerOff } from "react-icons/bi"

function Logout() {
    const navigate = useNavigate()

    function handleClick() {
        localStorage.clear()
        navigate("/login")
    }

    return (
        <button onClick={() => handleClick()} className="flex justify-center items-center p-2 rounded h-8 w-8 bg-orange-600 border-none cursor-pointer hover:bg-orange-900">
            <BiPowerOff className="text-lg text-orange-300" />
        </button>
    )
}

export default Logout
