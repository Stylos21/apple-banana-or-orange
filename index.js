const express = require('express');
const app = express()
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
})


app.get('/scripts/client.js', (req, res) => {
    res.sendFile(`${__dirname}/public/scripts/client.js`)
})

app.get('/data/model.json', (req, res) => {
    res.sendFile(`${__dirname}/public/data/model.json`)
})
app.get('/data/group1-shard1of4', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of4`)
})

app.get('/data/group1-shard2of4', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of4`)
})

app.get('/data/group1-shard3of4', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of4`)
})

app.get('/data/group1-shard4of4', (req, res) => {
    res.sendFile(`${__dirname}/public/data/group1-shard1of4`)
})
