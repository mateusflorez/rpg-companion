function SaveOnHistory(res: string) {
    const history = localStorage.getItem("history")
    let newHistory = []
    if (history && history !== "")
        newHistory = JSON.parse(history)
    else
        newHistory = []
    if (newHistory.length === 0) {
        return newHistory.push(JSON.stringify(res))
    } else {
        return newHistory.push(JSON.stringify("|" + res))
    }
}

export default SaveOnHistory
