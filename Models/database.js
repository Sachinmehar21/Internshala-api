const mongoose = require('mongoose');

exports.connectDatabases = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected`);
    }catch(error){
        console.log(error.message);
    }
};