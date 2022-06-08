const os = require('os');
//позволяет однопоточной ноде реализовать возможности многоядрных систем,запуская дочерние процессы
const cluster = require('cluster');
//console.log(os.platform())
//console.log(os.cpus().length)
//проверка главный ли процесс
if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length - 2; i++) {
        cluster.fork();//запускаем дочерний процесс
    }
    cluster.on('exit',(worker)=>{
        console.log(`worker with pid= ${worker.process.pid} died`);
        cluster.fork();
    })
} else{
    console.log(`worker with pid ${process.pid} work`);
    // setInterval(()=>{
    //     console.log(`worker with pid= ${process.pid} work yet`);
    //
    // },5000);

}
//мы можем в зависимости от количества ядер запускать разное количество процессов
//const cpus=os.cpus();
// оставляем два процесса для операционной системы

