import { createServer } from 'http';
import { readFile } from 'fs';
import { extname } from 'path';

const server = createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const ext = extname(filePath);
    let contentType = 'text/html';
    
    switch (ext) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                readFile('./index.html', (error, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, there was an error: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});