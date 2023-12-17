// ./configs/db.js
const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://shashankkaran41:shashank@cluster0.5fpqh94.mongodb.net/?retryWrites=true&w=majority/quiz', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connect;
