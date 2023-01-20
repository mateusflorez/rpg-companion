import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Header from "../components/Header"
import Characters from "./Characters"
import Dashboard from "./Dashboard"

function Static({ page }: { page: String }) {
    const [pageSelected, setPageSelected] = useState<String>("dashboard")

    const location = useLocation

    useEffect(() => {
        setPageSelected(page)
    }, [location, page])

    const handlePageChange = (page: String) => {

    }

    return (
        <div className="h-screen w-full overflow-auto bg-dark flex flex-col items-center">
            <Header currentPage={pageSelected} />
            {page === "dashboard" && <Dashboard />}
            {page === "characters" && <Characters />}
        </div>
    )
}

export default Static
