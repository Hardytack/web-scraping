export function uniqueCount(scrapes) {
    const unique = scrapes.filter((item, i, arr) => {
        if (i === 0) return true

        return !(item.count === arr[i - 1].count)
    })

    return unique
}