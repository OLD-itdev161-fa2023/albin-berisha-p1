const express = require('express');
const dotenv = require('dotenv');

// Route files
const resortcamps = require('../albin-berisha-p1/routes/resortcamps');

// Load env vars
dotenv.config({ path: "./config/config.env"});

const app = express();

// Mount routers
app.use('/api/v1/resortcamps', resortcamps);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


