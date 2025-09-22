const newman = require('newman');
//require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/39966318-e8a79733-c90c-4fef-8c35-67b498269527?access_key=${process.env.secretKey}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 5,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
