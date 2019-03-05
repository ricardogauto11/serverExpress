const express = require('express')
const app = express();

// Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.get('/login', (req, res) => {
    res.render('auth/login.pug')
})

app.get('/reset-password', (req, res) => {
    res.render('auth/reset-password.pug')
})

app.get('/register', (req, res) => {
    res.render('auth/register.pug')
})

app.get('*', (req, res) => {
    res.end('404 not found')
})

app.listen(3000, () => {
    console.log('listening\nPress Ctrl+C to quit')
})