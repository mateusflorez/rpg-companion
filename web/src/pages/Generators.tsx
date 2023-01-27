import { useEffect, useRef } from "react";
import Answer from "../components/generators/Answer"
import Dices from "../components/generators/Dices";
import Npcs from "../components/generators/Npcs";
import StoryElements from "../components/generators/StoryElements";
import Terrain from "../components/generators/Terrain";
import Traveling from "../components/generators/Traveling";
import Dungeon from "../components/generators/Dungeon";
import Quest from "../components/generators/Quest";

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
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Terrain</h1>
                    <div className="">
                        <button onClick={() => { Terrain(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Arctic</button>
                        <button onClick={() => { Terrain(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Coastal</button>
                        <button onClick={() => { Terrain(3); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Desert</button>
                        <button onClick={() => { Terrain(4); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Forest</button>
                        <button onClick={() => { Terrain(5); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Grassland</button>
                        <button onClick={() => { Terrain(6); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Mountains</button>
                        <button onClick={() => { Terrain(7); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Active area</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Story elements</h1>
                    <div className="">
                        <button onClick={() => { StoryElements(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Elements</button>
                        <button onClick={() => { StoryElements(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Urban event</button>
                        <button onClick={() => { StoryElements(3); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Wilderness events</button>
                        <button onClick={() => { StoryElements(4); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Creatures</button>
                        <button onClick={() => { StoryElements(5); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">People</button>
                        <button onClick={() => { StoryElements(6); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Situations</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Roll dice</h1>
                    <div className="">
                        <button onClick={() => { Dices(4); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D4</button>
                        <button onClick={() => { Dices(6); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D6</button>
                        <button onClick={() => { Dices(8); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">D8</button>
                        <button onClick={() => { Dices(10); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D10</button>
                        <button onClick={() => { Dices(12); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D12</button>
                        <button onClick={() => { Dices(20); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D20</button>
                        <button onClick={() => { Dices(100); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">D100</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">NPC's</h1>
                    <div className="">
                        <button onClick={() => { Npcs(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Random</button>
                        <button onClick={() => { Npcs(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Worker</button>
                        <button onClick={() => { Npcs(3); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Adventurer</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Dungeons</h1>
                    <div className="">
                        <button onClick={() => { Dungeon(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Dungeon</button>
                        <button onClick={() => { Dungeon(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Area</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Quests</h1>
                    <div className="">
                        <button onClick={() => { Quest(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Quest</button>
                        <button onClick={() => { Quest(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Source</button>
                    </div>
                </div>
                <div className="pt-2 w-full flex flex-col justify-center gap-2" >
                    <h1 className="text-zinc-500">Traveling</h1>
                    <div className="">
                        <button onClick={() => { Traveling(1); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Weather</button>
                        <button onClick={() => { Traveling(2); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Encounter</button>
                        <button onClick={() => { Traveling(3); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-2 text-sm border-none cursor-pointer transition hover:bg-orange-900">Settlement</button>
                        <button onClick={() => { Traveling(4); updateHistory() }} className="m-1 h-fit w-fit bg-orange-600 rounded font-semibold text-white py-1 px-1 text-sm border-none cursor-pointer transition hover:bg-orange-900">Disturbances</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generators
