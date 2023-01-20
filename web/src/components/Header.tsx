import Logo from '../assets/d20.png'
import Logout from './Logout'

function Header() {
    return (
        <div className='py-4 flex justify-between items-center px-8 h-16 bg-dark'>
            <div className="flex items-center gap-4">
                <img src={Logo} className='h-12' />
                <h1 className="text-white font-bold text-2xl">TTRPG Companion</h1>
            </div>
            <div className="flex items-center">
                <Logout />
            </div>
        </div>
    )
}

export default Header
