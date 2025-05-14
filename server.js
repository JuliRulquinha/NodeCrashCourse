import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) =>{
    //res.setHeader('Content-type', 'text/html'); // Text plain shows the text as it is
    //res.statusCode = 404;

    res.writeHead(200, {'Content-Type': 'text/html'}); // This is the correct way to set the header
    res.end('Hello World!'); // This will send the response to the client})); 
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});