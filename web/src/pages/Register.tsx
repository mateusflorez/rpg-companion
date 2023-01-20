import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, ToastOptions } from "react-toastify"
import Logo from '../assets/d20.png'

function Register() {
  const toastOption: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    theme: 'dark'
  }

  const navigate = useNavigate()

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-dark">
      <form className="flex flex-col gap-8 rounded-lg bg-cloudy py-12 px-20">
        <div className="flex justify-center items-center gap-4">
          <img src={Logo} className='h-20' />
          <h1 className="text-white font-bold text-4xl">TTRPG Companion</h1>
        </div>
        <input type="text" placeholder="Username" name="username" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" />
        <input type="text" placeholder="Email" name="email" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" />
        <input type="text" placeholder="Password" name="password" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" />
        <input type="text" placeholder="Confirm your password" name="confirmPassword" className="placeholder:text-zinc-600 text-white bg-zinc-900 p-4 rounded w-full h-12 focus:outline-none focus:bg-zinc-600 transition" />
        <button type="submit" className="bg-orange-600 rounded font-bold text-white py-4 px-8 border-none cursor-pointer transition hover:bg-orange-900">Sign up</button>
        <span className="text-white">Already have an account? <Link to="/login" className="text-orange-600 font-bold no-underline">Login</Link></span>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Register
