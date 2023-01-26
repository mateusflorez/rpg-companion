function SaveOnHistory(res: string) {
    const history = localStorage.getItem("history")
    let newHistory = []
    if (history && history !== "")
        newHistory = JSON.parse(history)
    if (newHistory.length === 0) {
        newHistory.push(JSON.stringify(res))
    } else {
        newHistory.push(JSON.stringify("|" + res))
    }
    return newHistory
}

export default SaveOnHistory
