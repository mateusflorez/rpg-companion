import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/d20.png'
import Logout from './Logout'

function Header({ currentPage }: { currentPage: String }) {

    return (
        <div className='w-full py-4 flex justify-between items-center px-8 h-16 bg-dark'>
            <div className="flex items-center gap-4">
                <img src={Logo} className='h-12' />
                <Link to={"/"} className="text-white font-bold text-2xl" >TTRPG Companion</Link>
                <div className="pl-8 flex items-center gap-4">
                    <Link to={"/"} className={`${currentPage == "dashboard" ? "text-orange-500 font-bold" : "text-white font-medium"} text-xl cursor-pointer`} >Home</Link>
                    <Link to={"/characters"} className={`${currentPage == "characters" ? "text-orange-500 font-bold" : "text-white font-medium"} text-xl cursor-pointer`} >Characters</Link>
                </div>
            </div>
            <div className="flex items-center">
                <Logout />
            </div>
        </div >
    )
}

export default Header
