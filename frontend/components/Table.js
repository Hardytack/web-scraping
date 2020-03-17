import {formatDistanceToNow} from 'date-fns';

export default function Table({scrapes}) {
    const reversed = [...scrapes].reverse();
    return (
        <table>
            <thead>
                <tr>
                    <td>Count</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                {reversed.map(scrape => (
                    <tr><td key={scrape.count}>{scrape.count}</td><td>{formatDistanceToNow(new Date(scrape.date), {addSuffix: true})}</td></tr>
                ))}
            </tbody>
        </table>
    )
}