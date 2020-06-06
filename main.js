const express = require('express');
const path = require("path");
const fs = require("fs");
const videoDir=JSON.parse(fs.readFileSync('sourceDir.json',{encoding:'utf-8'})).videoDir;

console.log('video directory:'+videoDir);

var app = express();

app.use(express.static(path.join(__dirname, 'front')));
app.use(express.static(videoDir));


app.get('/', function (req, res) {
    res.sendfile(__dirname + "/front/index.html");
});
 
app.get("/videoList", function (req, res) {
    fs.readdir(videoDir, function (err, data) {
        if (err) {
            res.send("[]");
        }else{
            var str_list_videos=JSON.stringify(data);
            res.send(str_list_videos);
        }
    });
});

app.get("/play", function (req, res) {
    res.sendfile(__dirname + "/front/play.html");
});

var server = app.listen(80, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("Server running at http://%s:%s", host, port);

});