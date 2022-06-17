//создание, удаление папок
const fs = require('fs');
const path = require('path');
const dotenv=require('dotenv');
dotenv.config();
//синхронная ф-ция создания вложенных папок
//fs.mkdirSync(path.resolve(__dirname,'dir','dir2'),{recursive:true});
// ассинхронные ф-ции
console.log('start');
/*fs.mkdir(path.resolve(__dirname,'newDir','newDir2','newDir3'),{recursive:true},(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('newDir created');
})*/
console.log('end');
//удаление вложенных папок
/*
fs.rmdir(path.resolve(__dirname,'newDir'),{recursive:true},(err)=>{
if(err){
    throw err;
}
})*/
//создание файла и запись в него данных, перезаписывая содержимое файла
fs.writeFile(path.resolve(__dirname, 'test.txt'), 'hello,world 777', (err) => {
    if (err) {
        throw err;
    }
})
fs.writeFile(path.resolve(__dirname,'./dir/text00.text'),`${new Date().getDate()}`,(err)=>{
    if(err){
        throw  err;
    }
})
fs.writeFile(path.resolve(__dirname,'./dir/dir2/text001.text'),`${new Date()}`,(err)=>{
    if(err) throw err;
});
//чтобы дописать что-то в файл
// fs.appendFile(path.resolve(__dirname,'test.txt'),'new added text',(err)=>{
//     if(err)
//     throw err;
// })
// использование промисов,чтобы писать читабильный код,когда у нас могут ф-ции вкладываться друг в друга
export const writeFile = async (path, data) => {
    return new Promise((res, rej) => fs.writeFile(path, data, (err) => {
        if (err) {
            return rej(err.message);
        }
        res();
    }))
}
const appendText = async (path, data) => {
    return new Promise((res, rej) => fs.appendFile(path, data, (err) => {
        if (err) {
            return rej(err.message);
        }
        res();
    }))
}


// ф-ция для считывания файла
export const readFileAsync = async (path) => {
    return new Promise((res, rej) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return rej(err.message);
        }
        res(data);
    }));
}
writeFile(path.resolve(__dirname, 'test_02'), 'this file was created today')
    .then(() => appendText(path.resolve(__dirname, 'test_02.text'), ' new added text'))
    .then(() => appendText(path.resolve(__dirname, 'test_02.text'), ' added text in the end'))
    .then(() => readFileAsync(path.resolve(__dirname, 'test_02.text'))).then(data => console.log(data))
    .catch(err => console.log(err))
// function for remove file
export const removeFile = (path) => new Promise((res,rej)=>fs.rm(path,(err)=>{
    if(err) return rej(err.message);
    res();
}));
//removeFile(path.resolve(__dirname,'test_02')).then(()=>console.log('file  was removed'));
const text=process.env.TEXT||'';
writeFile(path.resolve(__dirname,'text_00'),text)
.then(()=>readFileAsync(path.resolve(__dirname,'text_00')))
    .then().then(data=>data.split('').length)
    .then(count=>writeFile(path.resolve(__dirname,'count.text'),`count of words = ${count}`))
    .then(()=>removeFile(path.resolve(__dirname,'text_00')))

const text2=process.env.TEXT2||'';
writeFile(path.resolve(__dirname,'newText.text'),text2)
    .then(()=>readFileAsync(path.resolve(__dirname,'newText.text')))
    .then(data=>data.split('').length).then(data=>writeFile(path.resolve(__dirname,'count002.text'),data))
    .then(()=>removeFile(path.resolve(__dirname,'newText.text')))
    .catch(err=>err.message)
