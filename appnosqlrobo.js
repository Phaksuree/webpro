var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017"

mongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo = db.db("example01");
    /*dbo.createCollection("product", function(err, res){
        if(err) throw err;
        console.log("collection cerated");
        db.close;
   });*/
    /*var obj = {name: "Coffee mug",price: 10}
    dbo.collection("product").insertOne(obj), function(err,res){
        if(err) throw err;
        console.log("inserted"+res.insertedCount+"item");
        db.close;
   }*/
   /*var obj = [ 
    { name: "Book", price: 10 },
    { name: "Pencil", price: 5 },
    { name: "Calculator", price: 40 },
    { name: "Notebook", price: 15 },
    { name: "T-Shirt", price: 20 },
    { name: "Jacket", price: 20 }]
    dbo.collection("product").insertMany(obj), function(err,res){
        if(err) throw err;
        console.log("Inserted"+res.insertedCount+"items");
        db.close;
    }*/
    /*
    dbo.collection("product").findOne({}, function(err,result){
        if(err) throw err
        console.log(result.name)
        db.close();
    });
    dbo.collection("product").findOne({}, function(err,result){
        if(err) throw err
        console.log(result.price)
        db.close();
    });
    dbo.collection("product").find({}).toArray(function(err,result){
        if(err) throw err
        console.log(result)
        db.close()        
    })*/
    
    //var query = {price: 20}
    var query = {name: /^C/}
    var keysort = {name: 1} //1 น้อยไปมาก -1 มากไปน้อย

    dbo.collection("product").find(query).sort(keysort).toArray(function(err,result){
        if(err) throw err
        console.log(result)
        db.close() 
    })
    //dbo.collection("product").find(query).toArray(function(err,result)
});
