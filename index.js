require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req,res) =>{
    res.send('Hello Ravi')
})

app.get('/insta', (req,res) =>{
    res.send('_ravi_choydharyy')
})

app.get('/login', (req,res) =>{
    res.send('login here')
})

app.get('/jaat', (req,res) =>{
    res.send('16 * 2 => 8')
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})