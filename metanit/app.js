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
let {date,name,getMessage}=require('./greeting');
//получение доступа к переменной date from module greeting
console.log('date of request: ',date)
//получение доступа к ф-ции getMessage from module greeting
console.log(getMessage(userName));

const User=require('./user');
const alex=new User(userName,45);
console.log(alex);
alex.sayHi();
alex.displayInfo();
const {showName}=require('npm-package');
console.log(showName('bob'));
console.log('name from greeting: ',name);
name='bob';
console.log(name);

// принимаю из папки welcome
const {getMessEvening,user,num,getMessMorning,data,message}=require('./welcome');
getMessMorning();
getMessEvening();
console.dir(user);
console.log(user);
console.log(num);
console.log(data);
console.log(message);
//здесь я вытаскиваю из папки по умолчанию, а это файл index.js
const{index}=require('./test');

//здесь же я прописываю полный путь и уже вытаскиваю из конкретного файла
console.log(index);
const {test1}=require('./test/test1');
