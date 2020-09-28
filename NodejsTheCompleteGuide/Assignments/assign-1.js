const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const users = ['User1', 'User2', 'User3'];

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Hello from Assignment 1</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul>');
        users.forEach(user => {
            res.write('<li>'+user+'</li>');
        })
        res.write('</ul></body>');
        res.write('</html>');
        res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            res.write('User Added!!!')
            return res.end();
        });
    }
});

server.listen(3000);
