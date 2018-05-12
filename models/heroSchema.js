const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDbs');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

const heroSchema = mongoose.Schema({
  name :String,
  age : String,
  sex : String,
  address : String,
  dowhat : String,
  imgArr:[],
  favourite:String,
  explain:String
})

const loginSchema = mongoose.Schema({
  name :String,
  password:String
})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据
// const Hero = module.exports = mongoose.model('hero',heroSchema);

const Models = {
  Hero : mongoose.model('hero',heroSchema),
  Login : mongoose.model('Login',loginSchema)
}

module.exports = Models;
