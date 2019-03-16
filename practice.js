var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017"

mongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("example01");

    dbo.createCollection("students", function(err, res){
        if(err) throw err;
        console.log("collection cerated");

    var obj = [ 
        { id: 1 , firstname: "Bob",lastname:"Cat",age: 21, major:"Math"},
        { id: 2 , firstname: "Tom",lastname:"Cat",age: 18, major:"Science"},
        { id: 3 , firstname: "Marry",lastname:"Lamb",age: 19, major:"Science"},
        { id: 4 , firstname: "Linda",lastname:"Lamb",age: 21, major:"IT"}]
    
    dbo.collection("students").insertMany(obj, function(err,res){
        if(err) throw err;
        console.log("Inserted"+res.insertedCount+"items");

    var querymajor = {major:"Science"}
    var queryage ={age: {$lt:20}}
    var keysort = {age: -1}

    dbo.collection("students").find(querymajor).toArray(function(err,result){
        if(err) throw err
        console.log(result)
        
    dbo.collection("students").find(queryage).sort(keysort).toArray(function(err,result){
        if(err) throw err
        console.log(result)
        var querylastname = {lastname: /^L/}
    var updateitem = { $set:{lastname:"Fox"}}
    dbo.collection("students").updateMany(querylastname,updateitem,function(err,res){
        if(err) throw err
        console.log(res.result.nModified+" item(s) is updated")
        
    var newstudent = {id:5,firstname:"Adam",lastname:"Zoo",age:22,major:"Math"}
    dbo.collection("students").insertOne(newstudent, function(err, res) {
        if (err) throw err;
        console.log("document inserted");
        db.close();
      })
    })
    })

    })
    }) 
   })
})