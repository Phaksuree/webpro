var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "mydata"
})

con.connect(function(err){
    if(err) throw err
    console.log("connected")

    /*con.query("CREATE DATABASE mydata",function(err,result){
        if(err) throw err
        console.log("DATABASE CREATED")
    })*/

    /*var sql = "CREATE TABLE student(id VARCHAR(5),firstname VARCHAR(50),lastname VARCHAR(50),age INT(11))"

    con.query(sql,function(err,result){
        if(err) throw err
        console.log("TABLE CREATED")
    })*/
    /*var sql = "INSERT INTO student(id ,firstname ,lastname ,age) VALUES ('1','Bob','Cat',20)"

    con.query(sql,function(err,result){
        if(err) throw err
        console.log("Insert 1 record")
    })*/
    /*var sql = "INSERT INTO student (id, firstname, lastname, age) VALUES ?"
    var values = [
      ['1', 'Bob', 'Cat', 20],
      ['2', 'Tom', 'Cat', 19],
      ['3', 'Amy', 'Apple', 52],
      ['4', 'Hannah', 'Lamb', 21],
      ['5', 'Michael', 'Valley', 34],
      ['6', 'Sandy', 'Ocean', 28],
      ['7', 'Betty', 'Green', 15],
      ['8', 'Richard', 'Sky', 33],
      ['9', 'Susan', 'Bay', 48],
      ['10', 'Vicky', 'Yellow', 29],
      ['11', 'Ben', 'Park', 38],
      ['12', 'William', 'Central', 54],
      ['13', 'Chuck', 'May', 39],
      ['14', 'Viola', 'Sideway', 33]
    ]
    con.query(sql,[values],function(err,result){
        if(err) throw err
        console.log("Insert many record")
    })*/
    //หาโดยมีเงื่อนไข 
    /*var sql = "SELECT * FROM student WHERE firstname LIKE 'b%' "
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields)
    })*/
    //หาโดยมีเงื่อนไข แบบออกมา 5ตัว เริ่มที่ 2 
    /*var sql = "SELECT * FROM student LIMIT 5 OFFSET 2 "
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields)
    })*/
    //หาโดยมีเงื่อนไข และออกมา 5ตัว เริ่มที่ 2 
    /*var sql = "SELECT * FROM student LIMIT 2,5 "
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result)
        //console.log(fields)
    })*/
    //หาโดยมีเงื่อนไข
    /*var sql = "DELETE FROM student WHERE firstname = 'AMY'"
    con.query(sql,function(err,result,fields){
        if(err) throw err
        console.log(result.affectROW)
    })*/
})
