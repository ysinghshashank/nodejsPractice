const fs = require('fs');
fs.readFile('./test.txt',(error,data)=>{
    if(error){
        console.log("error in readiing",error);
    }
    else{
        console.log(data.toString());
    }

})

const text = fs.readFileSync('./class_note.txt','utf-8',console.log("read"));
console.log(text);
