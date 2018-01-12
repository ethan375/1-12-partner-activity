const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  name:{type:String,
    require:true},
    content:{type:String,
    require:true},
    design:{type:String,
    require:true},
 });

const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;