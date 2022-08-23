const fs = require("fs");
console.log('start reading');
const fileContentAsync = fs.readFile('hello.txt', 'utf8', (er, data) => {
    console.log('async reading file');
    if (er) throw er;
    console.log(data);
});
console.log('sync reading file');
//read from file in current directory
const fileContent = fs.readFileSync('hello.txt', 'utf8');
//read from file in directory test in current directory
const fileTest = fs.readFileSync('./test/test.txt', 'utf8');
//read from file in directory lessons which outer directory from current directory
const fileTestFromLessons = fs.readFileSync('../lessons/test.txt', 'utf8');
console.log(fileContent);
console.log(fileTest);
console.log(fileTestFromLessons);
console.log('end reading');

// write file
//перезаписываю уже имеющийся файл
fs.writeFileSync('hello.txt', 'hi my new friend');
//здесь я дописываю в сущестующий файл данные
fs.appendFileSync('hello.txt', '\nnew text in file hello.txt');
//создаю новый файл и тут же его читаю
fs.writeFile('hello2.txt', 'some text ', (er) => {
    if (er) throw er;
    console.log(fs.readFileSync('hello2.txt', 'utf8'));
});
//добавил текст в файл hello2.txt и тут же его прочитал - все операции асинхронны
fs.appendFile('hello2.txt', '\nadd some text from new line in file hello2.txt', function (er) {
    if (er) throw er;
    fs.readFile('hello2.txt', 'utf8', function (er, data) {
        if (er) throw er;
        console.log(data);
    })
})

