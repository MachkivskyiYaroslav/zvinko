const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors= require('cors');
const path = require('path');

const userRouter= require('./routes/user.router');
const sliderRouter= require('./routes/sliderRouter');

require('dotenv').config();
const fileUpload = require('express-fileupload');
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
global.appRoot= __dirname;
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.get('/', (req,res) => {
    res.send('Hello From server')
});
require("./dataBase/db")
app.use(userRouter);
app.use(sliderRouter);




app.listen(process.env.PORT, () => {
    console.log('Server Running 3000');
});
