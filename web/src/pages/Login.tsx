import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer, ToastOptions } from "react-toastify"
import { loginRoute } from "../utils/APIRoutes"
import axios from "axios"
import Logo from '../assets/d20.png'
import "react-toastify/dist/ReactToastify.css"

function Login() {
    const toastOptions: ToastOptions = {
        position: 'bottom-right',
        autoClose: 5000,
        pauseOnHover: true,
        theme: 'dark'
    }

    const [values, setValues] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate("/")
        }
    })

    function handleChange(e: any) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if (handleValidation()) {
            const { password, username } = values
            const request = await axios.post(loginRoute, {
                username,
                password
            })
            if (request.data.status === false) {
                toast.error(request.data.message, toastOptions)
            } else {
                localStorage.setItem('user', JSON.stringify(request.data.user))
                navigate("/")
            }
        }
    }

    function handleValidation() {
        const { password, username } = values
        if (username === "") {
            toast.error("Username is required", toastOptions)
            return false
        }
        if (password === "") {
            toast.error("Password is required", toastOptions)
            return false
        }
        return true
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-dark">
            <div className="pt-1 bg-orange-600 rounded-lg overflow-hidden">
                <form className="flex flex-col gap-8 rounded-t-lg bg-cloudy py-12 px-20" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="flex justify-center items-center gap-4">
                        <img src={Logo} className='h-20' />
                        <h1 className="text-white font-bold text-4xl">TTRPG Companion</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" onChange={e => handleChange(e)} />
                    <input type="password" placeholder="Password" name="password" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" onChange={e => handleChange(e)} />
                    <button type="submit" className="bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Login</button>
                    <span className="text-white">Don't have an account? <Link to="/register" className="text-orange-600 font-bold no-underline">Sign up</Link></span>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Login
