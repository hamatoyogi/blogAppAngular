/**
 * Created by yoavganbar on 04/03/2016.
 */
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var logger = require('morgan');

app.set('port',8080);

app.use(express.static(path.join(__dirname, '/../')));

app.get('/getData',function(req,res){
    fs.readFile('serverPosts.json', 'utf-8', function (err, data) {
        if (err) {throw err;}
        res.send(data);
    });
});
//app.get('/data/full-post/:id',function(req,res){
//    fs.readFile(__dirname + '/../data/posts/html/', 'utf-8', function (err, data) {
//        if (err) {throw err;}
//        res.send(data);
//    });
//});

// routes

// logger
app.use(logger('dev'));

app.listen(app.get('port'), function () {
    console.log('Server running  on port ' + app.get('port') + ' on localhost');
});
