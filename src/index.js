const Express = require('express');
require('dotenv').config();

const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.post('/check', function(req, res, next) {
    console.log(req)
    res.send('{"response": "OK"}');
});

app.listen('2001', function() {
    console.log('listening on port 2001');
});