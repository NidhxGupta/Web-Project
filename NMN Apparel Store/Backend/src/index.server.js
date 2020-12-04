// routes for different pages
// create models for database
// for logic we create controller folder

const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');

// To use the environment variable or initializing
env.config();

//mongodb+srv://admin:<password>@nmn-cluster.51oef.mongodb.net/<dbname>?retryWrites=true&w=majority

//mongodb connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@nmn-cluster.51oef.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(cors()); // Will let handle all api requests
// Adding middleware to pass data to API 
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
})); //For using bodyParser to post data
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

/*
app.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });
});

app.post('/data',(req,res,next) => {
    res.status(200).json({
        message: 'Hello from Server'
    });
});
*/

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});