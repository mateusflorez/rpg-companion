import { useEffect, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import CharacterBuilder from "./characters/CharacterBuilder"
import Characters from "./characters/Characters"
import CharacterSheet from "./characters/CharacterSheet"
import Dashboard from "./Dashboard"
import Generators from "./Generators"

function Static({ page }: { page: String }) {
    const [pageSelected, setPageSelected] = useState<String>("dashboard")

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user)
            navigate('/login')
    })

    useEffect(() => {
        setPageSelected(page)
    }, [location, page])

    return (
        <div className="h-screen w-full bg-dark flex flex-col items-center">
            <Header currentPage={pageSelected} />

            <div className="w-[99%] flex flex-col items-center overflow-auto scrollbar">
                {page === "dashboard" && <Dashboard />}
                {page === "characters" && <Characters />}
                {page === "characterBuilder" && <CharacterBuilder />}
                {page === "characterSheet" && <CharacterSheet />}
                {page === "generators" && <Generators />}
            </div>

        </div>
    )
}

export default Static
