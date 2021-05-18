
///////// type node write-operation.js filename  

const fs = require('fs');
const chalk =  require('chalk');

filenames = Array();



const filename = process.argv[2] ;

fs.readFile("sourceData.txt", function(err, data){
    if(err){
        console.log("Error");
    }
    else{
        readFileSource = data.toString();
        console.log(readFileSource);

        if(readFileSource.search(filename) != '-1'){
            console.log(chalk.red("Sorry already exist ! please type another file name"));
        }
        else{

            filenames.push(filename);

            StringFileNames = JSON.stringify(filenames);

            fs.appendFile("sourceData.txt", StringFileNames, function(err){
                if(err){
                    console.log(chalk.red("There is an error"));
                }
                else{
                    console.log(chalk.green("Writing opreration successful ! "));
                }
            })

            fs.appendFile(filename, "You are awesome", function(err){
                if(err){
                    console.log("There is an error");
                }
                else{
                    console.log(chalk.green("Writing opreration successful ! "));
                }
            })


        }
    }
})





//console.log(ObjReadFile);











// console.log(filenames.length);
// let i = 0;




// let contentFile = " ";
// for (let index = 3; index < 20; index++) {

//     console.log(process.argv[index]);
//     if(!process.argv[index]){

       
//     }
//     else{
//         contentFile  = contentFile +" "+ process.argv[index];
//     }
    
    
// }
// // const contentFile = process.argv[3] + process.argv[4] + process.argv[5] + process.argv[6] + process.argv[7] + process.argv[8];

// fs.writeFile(filename,  contentFile, function(err){
//     if (err){
//         console.log("Error ........");

//     }
//     else{
//         console.log("Writing Operation successfully") ;
//     }
// })