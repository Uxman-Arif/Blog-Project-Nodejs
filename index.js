const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connect = require('./connect');
const uservalidmw = require('./middleware/middlewares')
const route = require('./routes/urls');
const userroutes = require('./routes/userroute');

// connect('mongodb://127.0.0.1:27017/Blogs');
connect('mongodb://127.0.0.1:27017/Userregistration');
const app = express();
app.use(cookieParser())
app.use(uservalidmw)
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/user', userroutes);
app.use('/blogs', route);

app.listen(8000, ()=>console.log('The server is started...'));