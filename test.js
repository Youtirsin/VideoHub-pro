const fs = require("fs");
var str=fs.readFileSync('sourceDir.json',{encoding:'utf-8'});
var videoDir=JSON.parse(str).videoDir;
console.log(videoDir);