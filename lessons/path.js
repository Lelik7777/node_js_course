//модуль path позволяет работать с абсолютными и относительными путями
const path=require('path');
const {log} = require("nodemon/lib/utils");

console.log('%cget joined path: ','color:green', path.join('first','second'));
//при помощи __dirname мы можем получить абсолютный путь от корня до директории,
// где мы используем эту глобальную переменную  __dirname
console.log('склеить участки пути',path.join(__dirname,'first','second'));
// можно подняться вверх, поднимаясь по уровням, используя '..'
//сейчас я поднялся на два уровня вверх,таким образом можно перемещаться по файловой системе
console.log('подняться на два уровня вверх', path.join(__dirname,'..','..'));

// function resolve always return absolute path
console.log('get absolute path',path.resolve(__dirname,'first','second'));
const fullPath=path.resolve(__dirname,'path.js');
console.log('full path: ',fullPath);
console.log('парсинг пути',path.parse(fullPath));

console.log("разделитель в ОС",path.sep);
console.log('проверка на абсолютный путь',path.isAbsolute('/path.js'))
console.log('base name',path.basename(fullPath));
console.log('расширение файла',path.extname(fullPath))
console.log('**********************************************************')
const siteURL='http://localhost:8080/users?id=5123';
const site2URL='https://www.google.com/search?q=%D0%B2%D0%B8%D0%BA%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F&oq=%D0%B2%D0%B8%D0%BA&aqs=chrome.1.69i59l2j69i57j0i67l3j46i512l2j0i512j46i512.3692j0j15&sourceid=chrome&ie=UTF-8'
const url=new URL(siteURL);
const url2=new URL(site2URL);
console.log(url);
console.log(url2);