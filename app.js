const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const app = express();
const userRouter= require('./routes/user.router');
// const createUser= require()
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.get('/', (req,res) => {
    res.send('Hello From server')
});
require("./dataBase/db")
app.use(userRouter);




app.listen(process.env.PORT, () => {
    console.log('Server Running 3000');
});
