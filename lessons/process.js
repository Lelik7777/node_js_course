//console.log(process.pid);
//могу создать бесконечный цикл,который создаст процесс в диспетчере задач и под его id его можно увидеть
// используя command :  kill numberIdprocess его можно остановить
/*while (true){

}*/
//получение доступа к глобальным переменным окружения из .env
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.PORT)
console.log(process.env.NODE_ENV)
//можем ввести что-то при запуске и это отразится в логах в виде массива
console.log(process.argv)
if (Math.random() > 0.5) {
    while (true) {
    }
} else {
    console.log('execution of program finish');
    process.exit();
}