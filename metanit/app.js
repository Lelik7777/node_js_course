const http=require('http');
http.createServer(function (request,response) {
    response.end('hello node.js');

}).listen(3000,'127.0.0.1',function () {
    console.log('server began listening requests on 3000 port');
});
const os=require('os');
//get data about user of this system, so about me
let userName=os.userInfo().username;
console.log(userName);
//подключения модуля greeting
const greeting=require('./greeting');
//получение доступа к переменной date from module greeting
console.log('date of request: ',greeting.date)
//получение доступа к ф-ции getMessage from module greeting
console.log(greeting.getMessage(userName));
const User=require('./user');
const alex=new User('alex',45);
console.log(alex);
alex.sayHi();
alex.displayInfo();