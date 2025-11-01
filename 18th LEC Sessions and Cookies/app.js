// Core Modules
require('dotenv').config();
const path = require('path');

// External Modules
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

// Local Modules
const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const authRouter = require('./routes/authRouter');
const rootDir = require('./utils/pathUtil');
const errorsController = require('./controllers/errors');

// Initialize express
const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// MongoDB session store
const store = new MongoDBStore({
  uri: process.env.DB_PATH, 
  collection: 'sessions',
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'soriful',
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

// Routers
app.use(authRouter);
app.use(storeRouter);
app.use('/host', (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
});
app.use('/host', hostRouter);

// Static files
app.use(express.static(path.join(rootDir, 'public')));

// Error controller
app.use(errorsController.pageNotFound);

// Server + Database
const PORT = 3000;
mongoose
  .connect(process.env.DB_PATH)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error while connecting to MongoDB:', err);
  });
