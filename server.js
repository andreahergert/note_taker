const express = require('express');
const routes = require('./routes/routes.js');
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Middleware for urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', routes);
app.use('/api', routes);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);