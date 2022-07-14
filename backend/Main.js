const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.post('/ordered', function(req, res) {
    res.write('aassas')
})

app.listen(
    PORT,
    ()=>console.log('server listening on http://localhost:3000')
)