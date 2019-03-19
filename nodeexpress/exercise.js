var mongoClient = require('mongodb').MongoClient;
var express = require('express')
var url = "mongodb://localhost:27017"
var fs = require('fs')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json())
/*var obj =[
    {
    "id" : 1,
    "firstname" : "Bob",
    "lastname" : "Cat",
    "age" : 21,
    "major" : "Math"
    },
    {
    "id" : 2,
    "firstname" : "Tom",
    "lastname" : "Cat",
    "age" : 18,
    "major" : "Science"
    },
    {
    "id" : 3,
    "firstname" : "Marry",
    "lastname" : "Lamb",
    "age" : 19,
    "major" : "Social Study"
    },
    {
    "id" : 4,
    "firstname" : "Linda",
    "lastname" : "Lamb",
    "age" : 21,
    "major" : "IT"
    }
]
dbo.collection("user").insertMany(obj), function(err,res){
    if(err) throw err;
    console.log("Inserted"+res.insertedCount+"items");
    db.close();
}*/
app.get('/getUsers',function(req,res){
       
   mongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("example02");

    dbo.collection("user").find({}).toArray(function(err,result){
        if(err) throw err
        res.end(JSON.stringify(result))
        db.close()        
        })
    });

})

app.get('/getUsers/:id',function(req,res){
       
    mongoClient.connect(url,function(err,db){
     if(err) throw err;
     var dbo = db.db("example02");
     dbo.collection("user").find({id:parseInt(req.params.id)}).toArray(function(err,result){
        if(err) throw err
        res.end(JSON.stringify(result))
        db.close()        
        })
    });

})

app.post('/addUser',function(req,res){
       
    mongoClient.connect(url,function(err,db){
        if(err) throw err;
        var dbo = db.db("example02");
        var myobj = req.body

        dbo.collection("user").insertOne(myobj,function(err,result){
           if(err) throw err
           res.end(JSON.stringify(result))
           db.close()        
           })
        })
})

var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s",host,port)
})
