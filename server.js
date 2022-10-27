const express = require('express');
const app = express();
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', api);
app.use('/api', api);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);