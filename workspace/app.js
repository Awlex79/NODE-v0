const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
    console.log('Ha-Ha');
    res.send('<form actioon="/product" method="POST"><input type="text" neme="title"><button type="submit>">Add product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1> Hello From Express!</h1>');
});

app.listen(3000);

/*
const  server = http.createServer(app);

server.listen(3000);
*/