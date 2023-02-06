import { useEffect, useRef } from "react";
import Answer from "../components/generators/Answer"
import Dices from "../components/generators/Dices";
import Npcs from "../components/generators/Npcs";
import StoryElements from "../components/generators/StoryElements";
import Terrain from "../components/generators/Terrain";
import Traveling from "../components/generators/Traveling";
import Dungeon from "../components/generators/Dungeon";
import Quest from "../components/generators/Quest";
import Settlement from "../components/generators/Settlement";
import SaveOnHistory from "../components/generators/shared/SaveOnHistory";

function Generators() {

    const historyLogRef = useRef<any>(null)

    useEffect(() => {
        updateHistory()
    }, [])

    function updateHistory(textToUpdate: string | null = null) {
        if (textToUpdate) {
            const newHistory = SaveOnHistory(textToUpdate)
            localStorage.setItem("history", JSON.stringify(newHistory))
        }
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
        <div className="py-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">Generators</h1>
            </div>
            <div className="pt-8 w-full flex flex-col justify-center" >
                <textarea ref={historyLogRef} className="bg-zinc-900 rounded resize-none text-zinc-600 scrollbar p-4" name="history" id="history" disabled={true} rows={10}></textarea>
            </div>
            <div className="grid grid-cols-3">
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Answer generator</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Answer(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Impossible</button>
                        <button onClick={() => { updateHistory(Answer(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Highly unlikely</button>
                        <button onClick={() => { updateHistory(Answer(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Unlikely</button>
                        <button onClick={() => { updateHistory(Answer(4)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Possible</button>
                        <button onClick={() => { updateHistory(Answer(5)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Likely</button>
                        <button onClick={() => { updateHistory(Answer(6)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Highly Likely</button>
                        <button onClick={() => { updateHistory(Answer(7)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Certainty</button>
                        <button onClick={() => { updateHistory(Answer(8)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">50/50</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Terrain</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Terrain(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Arctic</button>
                        <button onClick={() => { updateHistory(Terrain(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Coastal</button>
                        <button onClick={() => { updateHistory(Terrain(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Desert</button>
                        <button onClick={() => { updateHistory(Terrain(4)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Forest</button>
                        <button onClick={() => { updateHistory(Terrain(5)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Grassland</button>
                        <button onClick={() => { updateHistory(Terrain(6)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Mountains</button>
                        <button onClick={() => { updateHistory(Terrain(7)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Active area</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Story elements</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(StoryElements(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Elements</button>
                        <button onClick={() => { updateHistory(StoryElements(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Urban event</button>
                        <button onClick={() => { updateHistory(StoryElements(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Wilderness events</button>
                        <button onClick={() => { updateHistory(StoryElements(4)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Creatures</button>
                        <button onClick={() => { updateHistory(StoryElements(5)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">People</button>
                        <button onClick={() => { updateHistory(StoryElements(6)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Situations</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Roll dice</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Dices(4)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D4</button>
                        <button onClick={() => { updateHistory(Dices(6)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D6</button>
                        <button onClick={() => { updateHistory(Dices(8)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D8</button>
                        <button onClick={() => { updateHistory(Dices(10)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D10</button>
                        <button onClick={() => { updateHistory(Dices(12)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D12</button>
                        <button onClick={() => { updateHistory(Dices(20)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D20</button>
                        <button onClick={() => { updateHistory(Dices(100)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D100</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">NPC's</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Npcs(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Random</button>
                        <button onClick={() => { updateHistory(Npcs(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Worker</button>
                        <button onClick={() => { updateHistory(Npcs(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Adventurer</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Dungeons</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Dungeon(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Dungeon</button>
                        <button onClick={() => { updateHistory(Dungeon(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Area</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Quests</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Quest(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Quest</button>
                        <button onClick={() => { updateHistory(Quest(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Source</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Settlement</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Settlement(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Trades</button>
                        <button onClick={() => { updateHistory(Settlement(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Merchant</button>
                        <button onClick={() => { updateHistory(Settlement(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Rumors</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Traveling</h1>
                    <div className="">
                        <button onClick={() => { updateHistory(Traveling(1)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Weather</button>
                        <button onClick={() => { updateHistory(Traveling(2)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Encounter</button>
                        <button onClick={() => { updateHistory(Traveling(3)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Settlement</button>
                        <button onClick={() => { updateHistory(Traveling(4)) }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Disturbances</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generators
