export const camelWordSplits = (word) => {
    let words = []

    let chars = []

    if (!word) {
        return words
    }

    for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);

        if (c === c.toUpperCase()) {
            if (chars.length !== 0) {
                words.push(chars.join(""))

                chars = [] // clear and go to next loop
            }

            chars.push(c)
        } else {
            chars.push(c)
        }
    }

    words.push(chars.join(""))

    return words
}

export const camelWordsMatch = (sources, targets) => { // targets match sources
    if (!targets || targets.length === 0) {
        return false
    }

    if (!sources || sources.length === 0) {
        return false
    }

    for (let i = 0; i < targets.length; i++) {
        let t = targets[i];

        let slices = sources.slice(i, sources.length);

        if (slices.some(s => {
            return s.includes(t)
        })) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}
