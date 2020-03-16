import express from 'express';
import cors from 'cors';

import FileSync from 'lowdb/adapters/FileSync'; 

import { getTwitterCount, getInstagramCount} from './lib/scrapper';
import db from './lib/db';

// import './lib/cron';

const app = express();
app.use(cors());

app.get('/scrape', async (req, res, next) => {
    console.log('scraping!');
    const [instagramFollowers, twitterFollowers] = await Promise.all([
        getInstagramCount('hardytack'), 
        getTwitterCount('hardytack')
    ]);
    res.json({instagramFollowers, twitterFollowers});
})

app.get('/data', async (req, res, next) => {
    //get the scrape data
    const twitter = db.value();
    res.json(twitter);
    //respond with json
})


app.listen(1994, () => {
    console.log(`server started on port 1994`)
})