const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./router.js');


router.route(app);
app.use(express.static(path.join(__dirname, 'media')));
app.listen(port);