//создание, удаление папок
const fs=require('fs');
const path=require('path');
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
fs.writeFile(path.resolve(__dirname,'test.txt'),'hello,world 777',(err)=>{
    if(err){
        throw err;
    }
})
//чтобы дописать что-то в файл
// fs.appendFile(path.resolve(__dirname,'test.txt'),'new added text',(err)=>{
//     if(err)
//     throw err;
// })
