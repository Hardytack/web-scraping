import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scrapper';
// const getHTML = require('./lib/scrapper');

async function go(username) {
    const tPromise = getHTML(`https://twitter.com/${username}`);
    const iPromise = getHTML(`https://www.instagram.com/${username}/`)

    const [twitterHTML, instagramHTML] = await Promise.all([tPromise, iPromise])

    const twitterFollowers = await getTwitterFollowers(twitterHTML);
    const instagramFollowers = await getInstagramFollowers(instagramHTML);
    console.log(`You have ${twitterFollowers} Twitter Followers and ${instagramFollowers} Instagram Followers!`);
}

go('hardytack');
