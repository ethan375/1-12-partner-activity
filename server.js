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



app.get("/coins", (req, res) => {
  Coin.find({}, (err, allCoins) => {
    if (err) {
      console.log(err)
    } else {
      console.log(allCoins)
      res.render("index.ejs", {
        coins: allCoins
      })
    }
  })
})


app.get('/coins/new',(req, res)=>{
  res.render('new.ejs');
});

app.post('/coins', (req,res)=>{
  // res.send(req.body)
  Coin.create(req.body, (err, createdCoin)=>{
    if(err) {console.log(err)
    }else {
      // res.send(createdCoin);
      res.redirect("/coins")
    }

  })
});


app.get("/coins/:id", (req, res) => {
  Coin.findById(req.params.id, (err, coinFound) => {
    res.render("show.ejs", {
      coin: coinFound
    })
  })
})





app.listen(3005, ()=>{
  console.log("server listening");
})