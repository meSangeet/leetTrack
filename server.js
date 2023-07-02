const https = require('https');
const http = require('http');
const fs = require('fs');

let naame;
let PFurl
let PFurlorg = "https://leetcode-stats-api.herokuapp.com/"; //profile URL original

const server = http.createServer((req, res) => {
  let pgurl = req.url;

  if (pgurl === '/') {
    fs.readFile('./home.html', 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('An error occurred');
        throw err;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else if (pgurl === '/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      let requestData;
      try {
        requestData = JSON.parse(body);
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        res.writeHead(400);
        res.end('Bad Request');
        return;
      }

      const userInput = requestData.data;
      console.log('User input:', userInput);
      naame = userInput;
      PFurl = PFurlorg + userInput;
      console.log(PFurl);

      https.get(PFurl, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          // Perform any necessary processing or actions with the data

          // Send response back to the client
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        });
      }).on('error', (err) => {
        console.log('Error: ' + err.message);
        res.writeHead(500);
        res.end('An error occurred');
      });
    });
  } else if(req.url == '/profile'){
    fs.readFile('./profile.html', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('An error occurred');
          throw err;
        }
        res.writeHead(200);
        res.end(data);
      });
  }else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
