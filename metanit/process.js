console.log(process.argv[0])
console.log(process.argv);
const name=process.argv[2];
console.log(name);
const dotenv=require('dotenv');
dotenv.config();
console.log(process.env.TEXT)