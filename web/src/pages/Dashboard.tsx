import Book from '../assets/book.png'
import Code from '../assets/code.png'
import Resources from '../assets/resources.png'
import CrystalBall from '../assets/crystal-ball.png'

function Dashboard() {
    return (
        <div className="py-12 flex flex-col w-5/6">
            <div className="py-8 w-full flex flex-col justify-center items-center gap-4" >
                <h1 className="text-orange-600 font-bold text-6xl">TTRPG Companion</h1>
                <h4 className="text-white font-bold text-3xl">The Ultimate Resource for Tabletop RPG Players</h4>
                <div className="grid grid-cols-2 pt-16 gap-8">
                    <p className="text-white text-justify">
                        Welcome to TTRPG Companion, the ultimate resource for all your Tabletop RPG needs. Whether you're a new player looking to get started, or an experienced GM looking for new resources, TTRPG Companion has everything you need to take your game to the next level.
                    </p>
                    <div className='pl-8 flex flex-row justify-start'>
                        <img src={Book} className='h-20  object-contain' />
                    </div>
                </div>
                <div className="grid grid-cols-2 pt-16 gap-8">
                    <div className='pr-8 flex flex-row justify-end'>
                        <img src={Code} className='h-20  object-contain' />
                    </div>
                    <p className="text-white text-justify">
                        Our site is built using Node and React, which means it's fast, reliable, and easy to use. We've designed it to be simple and intuitive, so you can find what you need quickly and easily.
                    </p>
                </div>
                <div className="grid grid-cols-2 pt-16 gap-8">
                    <p className="text-white text-justify">
                        Our extensive library of resources includes character sheets, campaign settings, adventure modules, and more. We also offer a powerful character generator that allows you to create custom characters in minutes.
                    </p>
                    <div className='pl-8 flex flex-row justify-start'>
                        <img src={Resources} className='h-20  object-contain' />
                    </div>
                </div>
                <div className="grid grid-cols-2 pt-16 gap-8">
                    <div className='pr-8 flex flex-row justify-end'>
                        <img src={CrystalBall} className='h-20  object-contain' />
                    </div>
                    <p className="text-white text-justify">
                        In addition to our resources, we also offer a community forum where you can connect with other players and GMs, share tips and advice, and discuss the latest trends in Tabletop RPGs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
