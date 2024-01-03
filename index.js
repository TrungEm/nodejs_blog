const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Trung Em'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
