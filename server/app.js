const express = require('express');
const rootRouter = require('./routers');
const app = express();

app.use(express.json());
app.use('/api', rootRouter);
//TODO errors hendler

module.exports = app;
