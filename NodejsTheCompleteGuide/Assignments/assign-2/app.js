const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('Middleware 1');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Middleware 2');
//     res.send('Hello from Assignment 2')
// });

app.use('/users', (req, res, next) => {
    res.send('<h1>The Users Page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>The Home Page</h1>');
})

app.listen(3000);