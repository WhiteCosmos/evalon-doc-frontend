export const read_params = function () {
    let saved = localStorage.getItem("params")

    if (saved) {
        return JSON.parse(saved)
    }

    return undefined
}

export const save_params = function (params) {
    localStorage.setItem("params", JSON.stringify(params))
}
