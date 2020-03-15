import express from 'express';

import FileSync from 'lowdb/adapters/FileSync'; 

import { getTwitterCount, getInstagramCount} from './lib/scrapper';
import db from './lib/db';

import './lib/cron';

const app = express();

console.log(db);

app.get('/scrape', async (req, res, next) => {
    console.log('scraping!');
    const [instagramFollowers, twitterFollowers] = await Promise.all([
        getInstagramCount('hardytack'), 
        getTwitterCount('hardytack')
    ]);
    res.json({instagramFollowers, twitterFollowers});
})


app.listen(1994, (deets) => {
    console.log(`server started on port 1994`)
})