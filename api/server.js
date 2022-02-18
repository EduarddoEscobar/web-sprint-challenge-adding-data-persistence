// build your server here and require it from index.js
const express = require('express');
const cors = require('cors');
const helmet  = require('helmet');
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

module.exports = app;
