
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const All = require("../models/heroSchema");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDbs');

// 为这次连接绑定事件
const dbn = mongoose.connection;

// 查询所有英雄信息路由
router.get("/hero", (req, res) => {
  All.Hero.find({})
    .sort({ update_at: -1 })
    .then(heros => {
      res.json(heros);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});

// 通过ObjectId查询单个英雄信息路由
router.get("/hero/:id", (req, res) => {
  All.Hero.findById(req.params.id).then(hero => {
      res.json(hero);//发送一个 JSON 格式的响应。
  }).catch(err => {
      res.json(err);//发送一个 JSON 格式的响应。
  });
});

// 添加一个英雄信息路由
router.post("/hero", (req, res) => {
  //使用Hero model上的create方法储存数据
  All.Hero.create(req.body, (err, hero) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hero);
    }
  });
});

//更新一条英雄信息数据路由
router.put("/hero/:id", (req, res) => {
  All.Hero.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address,
        dowhat: req.body.dowhat,
        favourite: req.body.favourite,
        explain: req.body.explain
      }
    },
    {
      new: true
    }
  )
    .then(hero => res.json(hero))
    .catch(err => res.json(err));
});

// 添加图片路由
router.put("/addpic/:id", (req, res) => {
  All.Hero.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        imgArr: req.body.url
      }
    },
    {
      new: true
    }
  )
    .then(hero => res.json(hero))
    .catch(err => res.json(err));
});

//删除一条英雄信息路由
router.delete("/hero/:id", (req, res) => {
  All.Hero.findOneAndRemove({
    _id: req.params.id
  })
    .then(hero => res.send(`${hero.title}删除成功`))
    .catch(err => res.json(err));
});



// 查询所有登录用户信息
router.get("/login", (req, res) => {
  All.Login.find({}).then(logins => {
      res.json(logins);
    }).catch(err => {
      console.log(2);
      res.json(err);
    });
});

//添加用户信息，用户名和密码
router.post("/login/is", (req, res) => {
  //使用Login model上的create方法储存数据
  All.Login.create(req.body, (err, login) => {
    if (err) {
      console.log("err"+err);
      res.json(err);
    } else {
      console.log("login"+login);
      res.json(login);
    }
  });
});

//查询数据库是否有这个用户，若有，登录成功，若没有，登录失败
router.post("/login/login", (req, res) => {
  let name = req.body.name;
  //let pwd = req.body.password;
  All.Login.find({
    'name': name
    //'password': pwd
  }).then(logins => {
    //console.log(logins);
    //res.json(logins);//这是没处理之前传到前端的代码
    for(var i =0;i<logins.length;i++){
      if((logins[i].name == req.body.name) && (logins[i].password == req.body.password)){
        res.send(logins)
      }else if((logins[i].name == req.body.name) && (logins[i].password != req.body.password)){
        logins[i].password = '不对的密码';
        // let adk = { 
        //   _id: '5af0165bc4137e1bdcc05774',
        //   name: '特殊的zhang',
        //   password: '不对的密码123',
        //   __v: 0 };
        res.send(logins)
      }
    }
  }).catch(err => {
    console.log(2);
    res.json(err);
  });
});

//删除数据库中用户的信息
router.delete("/login/id",(req,res) =>{
    let id = req.body.id;
    console.log(req.body.id);
    All.Login.deleteOne({
        _id: id
    }).then((del) =>{
        res.send("删除成功");
    }).catch((err) =>{
        res.json(err)
    })
})

module.exports = router;




















