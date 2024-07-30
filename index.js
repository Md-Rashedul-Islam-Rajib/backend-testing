const express = require('express');
const port = 5000;

// middleware
const app = express();

app.get('/',  async (req, res) => {
    res.send('Hello World')
})