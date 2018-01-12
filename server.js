const express = require('express');
const app = express();
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/coins', {
  useMongoClient: true
});

mongoose.connection.once('open', ()=>{
  console.log("connected to mongo")
})

app.get('/coins/new',(req, res)=>{
  res.render('new.ejs');
});

app.post('/coins', (req,res)=>{
  res.send('posted')
});


app.listen(3000, ()=>{
  console.log("server listening");
})