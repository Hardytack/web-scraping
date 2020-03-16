import {useContext} from 'react'
import {ScrapeContext} from './ScrapeContext';
import {formatDistanceToNow} from 'date-fns';

export default function Data() {
    const {scrapes} = useContext(ScrapeContext);
    return <div>
        <h2>Data: </h2>
        <ul>
            {scrapes.twitter.map(scrape => {
                return<li key={scrape.count}>{scrape.count}</li>
            })}
        </ul>
        <h3>{scrapes.twitter.length}</h3>
        <ul>
            {scrapes.instagram.map(scrape => {
                return<li key={scrape.count}>{scrape.count} - {formatDistanceToNow(new Date(scrape.date), {addSuffix: true})}</li>
            })}
        </ul>
        <h3>{scrapes.instagram.length}</h3>
    </div>
}