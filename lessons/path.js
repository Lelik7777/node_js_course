//модуль path позволяет работать с абсолютными и относительными путями
const path=require('path');
console.log(path.join('first','second'));
//при помощи __dirname мы можем получить абсолютный путь от корня до директории,
// где мы используем эту глобальную переменную  __dirname
console.log('склеить участки пути',path.join(__dirname,'first','second'));
// можно подняться вверх, поднимаясь по уровням, используя '..'
//сейчас я поднялся на два уровня вверх
console.log( path.join(__dirname,'..','..'));
// function resolve always return absolute path
console.log('get absolute path',path.resolve(__dirname,'first','second'));
const fullPath=path.resolve(__dirname,'path.js');
console.log('парсинг пути',path.parse(fullPath));
console.log("разделитель в ОС",path.sep);
console.log('проверка на абсолютный путь',path.isAbsolute('/path.js'))
console.log('base name',path.basename(fullPath));
console.log('расширение файла',path.extname(fullPath))
console.log('**********************************************************')
const siteURL='http://localhost:8080/users?id=5123';
const url=new URL(siteURL);
console.log(url)