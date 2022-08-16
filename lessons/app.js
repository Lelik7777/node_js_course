//dotenv позволяет получать данные из файла .env
const dotenv=require('dotenv');
dotenv.config();
const arg=process.argv;
console.log(arg);
//здесь я получаю данные о переменной PORT1 из командной строки,в которой  я передал эту переменную
// при запуске  node ./lessons/app.js благодаря модулю cross-evn
console.log('PORT1 from cli: ',process.env.PORT1)
//здесь же я получаю доступ к файлу .env,где лежат пользовательские переменные(переменные окружения)
console.log('PORT from .env: ',process.env.PORT);
console.log('TEXT from .env: ',process.env.TEXT);
console.log('NEW_TEXT from .env: ',process.env.NEW_TEXT);