

function Dashboard() {
    return (
        <div className="py-12 flex flex-col content-center w-5/6" >
            <textarea className="bg-zinc-600 rounded resize-none" name="history" id="history" disabled={true} rows={10}></textarea>
        </div>
    )
}

export default Dashboard
