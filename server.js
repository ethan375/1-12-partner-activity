const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');




mongoose.connect('mongodb://localhost:27017/coins', {
  useMongoClient: true
});

mongoose.connection.once('open', ()=>{
  console.log("connected to mongo")
});

app.use(bodyParser.urlencoded({
  extended: true
}));



const Coin = require('./models/coins.js');


app.get('/coins/new',(req, res)=>{
  res.render('new.ejs');
});

app.post('/coins', (req,res)=>{
  // res.send(req.body)
  Coin.create(req.body, (err, createdCoin)=>{
    if(err){console.log(err)
    }else{
      res.send(createdCoin);
    }

  })
});


app.listen(3000, ()=>{
  console.log("server listening");
})