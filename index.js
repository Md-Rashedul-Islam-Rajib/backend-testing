const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
const app = express();

app.get('/',  async (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, async( ) => {
    console.log(`server running on ${port}`)
})