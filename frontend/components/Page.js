import {useEffect, useState} from 'react'; 
import {ScrapeProvider} from './ScrapeContext';

//Custom hook!
function useScrapes() {
    const [scrapes, setScrapes] = useState({twitter: [], instagram: []});
    useEffect(() => {
        async function getData() {
            console.log('mounting or updating...');
            const res = await fetch('http://localhost:1994/data');
            const data = await res.json();
            console.log(data);
            setScrapes(data);
        }
        getData()
    }, []
    );
    return scrapes;
}


export default function Page({children}) {
    const scrapes = useScrapes();
    return ( <ScrapeProvider value={{
        scrapes
    }}><div className="page">
        {children}
    </div></ScrapeProvider>
    )
}