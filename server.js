const express = require('express'); //import the express
const app = express(); //create instance of an express
//const connection = mysql.CreateConnetion({
    //host:'localhost',
    //user:'root',
    //password:'',
    //database:'test',
//});
app.get('/',(req,res) => {
    //connection.connect(); //connect the database
    //connection.query()
         //CREATE TABLE IF NOT EXISTS test(
         //id INT PRIMARY KEY, 
         //LastName varchar(255),
         //FirstName varchar(255),  
         //Address varchar(255),
        //City varchar(255));//
    res.status(200).type('text/bold').send('hello thomas')
});
app.listen(2000);//start the serverand listen on the specific 