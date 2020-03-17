import {useEffect, useState} from 'react'; 
import {ScrapeProvider} from './ScrapeContext';

//Custom hook!
function useScrapes() {
    //Initial state inside hook
    const [scrapes, setScrapes] = useState({twitter: [], instagram: []});

    //Fetch function
    async function fetchScrapes() {
        console.log('Fetching...')
        const res = await fetch('http://localhost:1994/aggregate');
        const data = await res.json();
        setScrapes(data);
    }

    //didmount, didUpdate
    useEffect(() => {
        fetchScrapes();
    }, []
    );
    return {scrapes, fetchScrapes};
}


export default function Page({children}) {
    const hookInfo = useScrapes();
    return ( <ScrapeProvider value={hookInfo}><div className="page">
        {children}
    </div></ScrapeProvider>
    )
}