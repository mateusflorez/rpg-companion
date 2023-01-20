

function Dashboard() {
    return (
        <div className="pt-12 flex flex-col w-5/6">
            <div className="flex flex-row justify-between w-full" >
                <h1 className="text-white font-bold text-4xl">RPG Generator</h1>
            </div>
            <div className="pt-8 w-full flex flex-col justify-center" >
                <textarea className="bg-zinc-600 rounded resize-none" name="history" id="history" disabled={true} rows={10}></textarea>
            </div>
        </div>
    )
}

export default Dashboard
