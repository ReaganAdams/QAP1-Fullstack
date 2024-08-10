// Import the http module to create a server
const http = require('http');

// Create an HTTP server that listens to server ports and gives a response back to the client
const server = http.createServer((req, res) => {
    // Check the URL of the current request
    if (req.url === '/json') {
        // Set the response HTTP header with a 200 status and JSON content type
        res.writeHead(200, { 'Content-Type': 'application/json' });

        // Create a JSON object to send in the response
        const jsonResponse = {
            message: "This is a JSON response",
            status: "success"
        };

        // Send the JSON response
        res.end(JSON.stringify(jsonResponse));
    } else if (req.url === '/notfound') {
        // Set the response HTTP header with a 404 status and plain text content type
        res.writeHead(404, { 'Content-Type': 'text/plain' });

        // Send a 404 not found response
        res.end('404 Not Found\n');
    } else {
        // Default response for any other request
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Send an HTML response
        res.end('<h1>Hello, this is an HTML response!</h1>\n');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Node.js web server at port 3000 is running..');
});
