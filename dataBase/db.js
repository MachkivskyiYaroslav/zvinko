const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    }, err => {
        if(err){
            console.error('error' + err)
        }else{
            console.log('connected to mongo db');
        }
    }
);
