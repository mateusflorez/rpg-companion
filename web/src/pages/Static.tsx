import { useState } from "react"
import Header from "../components/Header"
import Characters from "./Characters"
import Dashboard from "./Dashboard"

function Static({ page }: { page: String }) {
    const [pageSelected, setPageSelected] = useState<String>("dashboard")

    const handlePageChange = (page: String) => {
        setPageSelected(page)
    }

    return (
        <div className="h-screen w-full overflow-auto bg-dark flex flex-col items-center">
            <Header changePage={handlePageChange} currentPage={pageSelected} />
            {page === "dashboard" ? (
                <Dashboard />
            ) : null}
            {page === "characters" ? (
                <Characters />
            ) : null}
        </div>
    )
}

export default Static
