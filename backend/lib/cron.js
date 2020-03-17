import cron from 'node-cron';

import {runCron} from './scrapper';

//every 15 minutes
cron.schedule('*/15 * * * *', () => {
    console.log('Running the Cron!')
    runCron()
})

// cron.schedule('* * * * *', () => {
//         console.log('Running the Cron!')
//         runCron()
//     })