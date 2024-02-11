const newman = require("newman");
require('dotenv').config();


newman.run({
    collection: `https://api.postman.com/collections/30260227-cd2a0acb-05d4-43f2-be80-f78463e03cf0?access_key=${process.env.ACCESS_KEY}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run');
});