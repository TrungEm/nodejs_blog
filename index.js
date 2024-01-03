const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const a = 2;
    const b = 3;
    const c = a + b;
    return res.send('Hello Trung Em ^_^');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
