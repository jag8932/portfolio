const path = require('path');

function route(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/index.html'));
    });

    app.get('/styles/styles1.css', (req, res) => {
        res.sendFile(path.join(__dirname,'/styles/styles1.css'));
    })
}

module.exports = {
    route,
}