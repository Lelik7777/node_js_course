console.log(process.argv[0])
console.log(process.argv);
const name=process.argv[2];
console.log(name);
const dotenv=require('dotenv');
const fs = require("fs");
dotenv.config();
console.log(process.env.TEXT)
fs.unlink('hello2.txt',er=>{
    if(er) throw er;
    console.log('hello2.txt was deleted');
})