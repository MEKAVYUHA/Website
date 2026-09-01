const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/error' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('--- BROWSER ERROR ---');
      console.log(body);
      console.log('---------------------');
      res.writeHead(200);
      res.end('OK');
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(9999, () => {
  console.log('Error server listening on port 9999');
});
