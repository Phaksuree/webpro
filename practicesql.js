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

        var sql = "SELECT student.id,student.firstname,course.cid,course.coursename FROM course,student,sc WHERE student.id = sc.id AND course.cid = sc.cid AND course.cid = 'egco427'"
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });

        var sql = "SELECT student.firstname,course.cid,course.coursename FROM course,student,sc WHERE student.id = sc.id AND sc.cid = course.cid AND student.firstname='Tom'"
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
          });   
    })