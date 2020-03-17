import axios from 'axios';
import cheerio from 'cheerio'

import db from './db';


export async function getHTML (url) {
    const {data: html} = await axios.get(url);
    return html;
}

export async function getTwitterFollowers(html) {
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return span.data('count');
}

export async function getInstagramFollowers(html) {
    const $ = cheerio.load(html);
    const dataInString = $("script[type='application/ld+json']").html();
    const res = JSON.parse(dataInString);
    return parseInt(res.mainEntityofPage.interactionStatistic.userInteractionCount);
}

export async function getTwitterCount(username) {
    const html = await getHTML(`https://twitter.com/${username}`);
    const followers = await getTwitterFollowers(html);

    return followers;
}

export async function getInstagramCount(username) {
    const html = await getHTML(`https://www.instagram.com/${username}/`);
    const followers = await getInstagramFollowers(html);

    return followers;
}

export async function runCron() {
    console.log('scraping!');
    const [instagramFollowers, twitterFollowers] = await Promise.all([
        getInstagramCount('pokemon'), 
        getTwitterCount('pokemon')
    ]);
    db.get('twitter').push({
        date: Date.now(), 
        count: twitterFollowers
    }).write();
    db.get('instagram').push({
        date: Date.now(), 
        count: instagramFollowers
    }).write();
    console.log('done');
}