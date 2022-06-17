const path = require('path');
const dotenv = require('dotenv');
const fs=require('fs');


dotenv.config();
const writeFile = async (path, data) => {
    return new Promise((res, rej) => fs.writeFile(path, data, (err) => {
        if (err) {
            return rej(err.message);
        }
        res();
    }))
}
const readFileAsync = async (path) => {
    return new Promise((res, rej) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return rej(err.message);
        }
        res(data);
    }));
}
const removeFile = (path) => new Promise((res,rej)=>fs.rm(path,(err)=>{
    if(err) return rej(err.message);
    res();
}));
const text = process.env.NEW_TEXT || '';
writeFile(path.resolve(__dirname, 'task.text'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'task.text')))
    .then((data) => data.split('').length)
    .then((count) => `длина текста равна ${count}`)
    .then((data) => writeFile(path.resolve(__dirname, 'countText.text'), data))
    .then(() => removeFile(path.resolve(__dirname, 'task.text')))
    .catch(err => console.log(err))