const express = require('express');
const chalk = require('chalk');
const fs = require('fs');

app = express();
const port = 3900;

app.listen(port, 'localhost', (err) =>{
    if(err) throw err;
    console.log(chalk.green("Server is running on \t "+port));
})

app.get("/", function(req, res){
    res.send('<h1> WelCome To My Newone EXPRESS SERVER ');
})

app.get("/getMovies", function(req, res){
    fs.readFile("../data-db.json", function(err, data){
        if(err){
            console.log("An error has occurred ");
        }
        else{
            res.send(JSON.parse(data.toString()));
            
        }
    })
})

