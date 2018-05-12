const express = require('express');
const hero = require('./router/hero');
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//这一句是连接上数据库
var db = mongoose.connect('mongodb://localhost:27017/myDbs');
//这里的myDbs是数据库的名字，不是表的名字

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'src'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero);

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['POST','GET','OPTION','DELECT','PUT'],
    alloweHeaders:['Content-type','Authorization']
}))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('错误的信息');
});

app.listen(3000,() => {
    console.log('app listening on port 3000.')
})

module.exports = app;

