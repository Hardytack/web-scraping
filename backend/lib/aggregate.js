function lastSixHours(time) {
    const sixhours = 1000 * 60 * 60 * 6;
    return Date.now() - time < sixhours;
}


export function aggregate(scrapes) {
    const aggScrapes = scrapes.map(scrape => {
        const date = new Date(scrape.date);
        const optionalHour = lastSixHours(scrape.date) ? `-${date.getHours()}` : ``
        const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}${optionalHour}`;
        return {
            ...scrape,
            key: key
        }
    }).reduce((acc, current) => {
        //check if key is not in array yet
        if (!acc.find(scrape => scrape.key === current.key)) {
            return [...acc, current]
        }
        return acc
    }, []);
    return aggScrapes;
}