//modules imported

const https = require('https');



//main code

let PFurl = "https://leetcode-stats-api.herokuapp.com/sangeetworkspace"; //profile url

https.get(PFurl, (res)=>{
    let data = '';
    //after creating an empty string we will start writing data to the string in chunks of data
    res.on('data', (chunk) => {
        data += chunk;
    });

// the whole response has been received. Print out the results.
res.on('end', ()=>{
    console.log(JSON.parse(data));
});

})

