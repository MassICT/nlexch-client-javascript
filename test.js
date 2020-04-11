var nlexch = require("./nlexch");
//TODO insert access and key to test
var access = "";
var key = "";
var client = new nlexch(access,key);


//client.getAllTickers(function(err,result){
//    console.log(err,result)
//})

client.getTicker("cscbtc","ltcbtc",function(err,result){
    console.log(err,result)
})

