// Import the http module to create a server
const http = require('http');

// Create an HTTP server that listens to server ports and gives a response back to the client
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World" to the client
    res.end('Hello World\n');
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Node.js web server at port 3000 is running..');
});
