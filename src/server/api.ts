import * as express from 'express';

const host = "localhost";
const port = 3000;
const server = express();

server.get('/api/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World");
});

server.listen(port, host, () => {
    //connect to the DB
    console.log(`Server running at http://${host}:${port}/`);
});