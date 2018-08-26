const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
