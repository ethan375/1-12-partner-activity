const express = require('express');
const app = express();

app.get('/coins/new',(req, res)=>{
  res.render('new.ejs');
});

app.post('/coins', (req,res)=>{
  res.send('posted')
})


app.listen(3000, ()=>{
  console.log("server listening");
})