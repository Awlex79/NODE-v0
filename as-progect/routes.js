const fs = require ('fs')

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Greating text</title></head>');
        res.write('<body><br><br><h3>Hello fom App Server!</h3><tr>');
        res.write('<form action="/create_user" method="POST">Create an User: <input type="text" name="cr_new_user"><button type="submit">Create</button> </form>');
        res.write('</body></html>');
        return res.end();
    }

    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li><li>User 5</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create_user' && method === 'POST') {
        const uBody = [];
            req.on('data', chunk => {
            uBody.push(chunk);
        })

        return req.on('end', () => {
           const parsedUbody = Buffer.concat(uBody).toString();
           const message = parsedUbody.split('=')[1];
           console.log(message);
           return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Home Page</title></head>');
    res.write('<body><h2>Welcome on my Main Page</h2></body>');
    res.write('</html>');
    res.end();


};
module.exports = requestHandler;

