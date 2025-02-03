const express = require('express');
const path = require('path');
const connect = require('./connect');
const route = require('./routes/urls');

connect('mongodb://127.0.0.1:27017/Blogs')
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user', route);

app.listen(8000, ()=>console.log('The server is started...'));