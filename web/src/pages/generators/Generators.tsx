import { useEffect, useRef } from "react";
import Answer from "./functions/Answer"

function Generators() {

    const historyLogRef = useRef<any>(null)

    useEffect(() => {
        updateHistory()
    }, [])

    function updateHistory() {
        const history = localStorage.getItem("history")
        var historyVal
        if (history)
            historyVal = JSON.parse(history).toString()
        else
            historyVal = ""
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
            <div className="grid grid-cols-3">
                <div className="pt-8 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Answer generator</h1>
                    <div className="">
                        <button onClick={() => { Answer(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Impossible</button>
                        <button onClick={() => { Answer(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Highly unlikely</button>
                        <button onClick={() => { Answer(3); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Unlikely</button>
                        <button onClick={() => { Answer(4); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Possible</button>
                        <button onClick={() => { Answer(5); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Likely</button>
                        <button onClick={() => { Answer(6); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Highly Likely</button>
                        <button onClick={() => { Answer(7); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Certainty</button>
                        <button onClick={() => { Answer(8); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">50/50</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generators
