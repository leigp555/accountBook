export const useData = {
    getDate() {
        return JSON.parse(localStorage.getItem("record-xxx") as string)
    },
    setDate(userData: object) {
        const newData = JSON.stringify(userData)
        localStorage.setItem("record-xxx", newData)
    },
}
export const labelDate = {
    getLabels() {
        return JSON.parse(localStorage.getItem("labelDate") as string)
    },
    setLabel(data: [id: number, name: string]) {
        const newData = JSON.stringify(data)
        localStorage.setItem("labelDate", newData)
    }
}