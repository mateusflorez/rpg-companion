import { useEffect, useRef } from "react";
import Answer from "./functions/Answer"

function Generators() {

    const historyLogRef = useRef<any>(null)

    useEffect(() => {
        updateHistory()
    }, [])

    function updateHistory() {
        const history = localStorage.getItem("history")
        if (history)
            var historyVal = JSON.parse(history).toString()
        historyVal = historyVal.replace(/['"]+/g, '')
        historyVal = historyVal.replace(/[|]+/g, '\r\n──────────────────────────────\r\n')
        historyVal = historyVal.replace(/[§]+/g, '\r\n')
        historyLogRef.current.value = historyVal;
        historyLogRef.current.scrollTop = historyLogRef.current.scrollHeight
    }

    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">Generators</h1>
            </div>
            <div className="pt-8 w-full flex flex-col justify-center" >
                <textarea ref={historyLogRef} className="bg-zinc-900 rounded resize-none text-zinc-600 scrollbar p-4" name="history" id="history" disabled={true} rows={10}></textarea>
            </div>
            <div className="pt-8 w-full flex flex-col justify-center gap-2" >
                <h1 className="text-zinc-500">Answer generator</h1>
                <button onClick={() => { Answer(); updateHistory() }} className="h-fit w-fit bg-orange-600 rounded font-bold text-white py-2 px-2 border-none cursor-pointer transition hover:bg-orange-900">Normal</button>
            </div>
        </div>
    )
}

export default Generators
