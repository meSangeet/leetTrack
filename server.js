const https = require('https');
const http = require('http');
let PFurlorg = "https://leetcode-stats-api.herokuapp.com"; //profile URL original

const server = http.createServer((req, res) => {
    let pgurl = req.url;

    if (pgurl == '/') {
        res.writeHead(200);
        res.end('./home.html');
    } else {
        let PFurl = PFurlorg + pgurl;
        console.log(PFurl);

        https.get(PFurl, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                console.log(data);
                res.end(data);
            });
        }).on('error', (err) => {
            console.log('Error: ' + err.message);
            res.writeHead(500);
            res.end('An error occurred');
        });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port 8000");
});