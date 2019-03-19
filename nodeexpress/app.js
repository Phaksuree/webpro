var express = require('express')
//var app = express()
 
/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/

/*app.get('/showFile', function (req, res) {
    res.sendFile(__dirname + '/showFile.html')
});

app.get('/showData', function (req, res) {
    data={
        fname: req.query.fname,
        lname: req.query.lname
    }
    //console.log(data)
    res.end("<h1>"+data.fname+"</h1><br><em>"+data.lname+"<em>")
});*/

var fs = require('fs')
var app = express()

app.get('/getUsers',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        console.log(data)
        res.end(data)
    })
})
app.get('/getUsers/:id',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var users = JSON.parse(data)
        var user = users["user"+req.params.id]

        console.log(user)
        res.end(JSON.stringify(user))
    })
})

var user = {
    "user4": {
        "name": "betty",
        "password": "4444",
        "occupation": "engineer",
        "id": 4
    }
}
// method get
/*app.get('/addUser',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        userdata["user4"] = user["user4"]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})*/
// method post
/*app.post('/addUser',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        userdata["user4"] = user["user4"]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})*/
app.delete('/delUser/:id',function(req,res){
    fs.readFile(__dirname+"/user.json",'utf8',
    function(err,data){
        var userdata = JSON.parse(data)
        delete userdata["user"+req.params.id]
        console.log(userdata)
        res.end(JSON.stringify(userdata))
    })
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s",host,port)
})
