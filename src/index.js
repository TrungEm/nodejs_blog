const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const path = require('path');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public/')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Method override
app.use(methodOverride('_method'));

// Routes init
route(app);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
