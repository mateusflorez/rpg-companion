import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import CharacterBuilder from "./characters/CharacterBuilder"
import Characters from "./characters/Characters"
import Dashboard from "./Dashboard"

function Static({ page }: { page: String }) {
    const [pageSelected, setPageSelected] = useState<String>("dashboard")

    const location = useLocation

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
            </div>

        </div>
    )
}

export default Static
