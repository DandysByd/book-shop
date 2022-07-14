const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/ordered', function(req, res) {
   res.status(200)
})

app.post('/ordered', function(req, res) {
    res.status(200)
    res.send('')
})

app.listen(
    PORT,
    ()=>console.log('http://localhost:3000')
)