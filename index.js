const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/routes.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/use',routes)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const  PORT = process.env.PORT || 3000 ;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
const mongo_connect = require('./model/mongo_connect.js')
const Create_Schema = require('./model/content_desc')

mongo_connect.mongo_connect();
Create_Schema.Create_Schema();
