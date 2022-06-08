//events позволяет генерировать события, подписываться на них
//поскольку events это класс,то создаем класс генератор===Emitter
const Emitter = require('events');
const emitter = new Emitter();
// create custom event
//принимает имя события и колбек,который отрабатывает,когда событие сгенерировано
emitter.on('message', (data, second, third) => {
    console.log('you send message: ' + data);
    console.log('second argument is ' + second);
})
emitter.emit('message1', 'hsadf');
emitter.emit('message2', 'asdf');
// const MESSAGE=process.env.message||'';
// if(MESSAGE){
//     emitter.emit('message',MESSAGE,1234)// генерация события,если сообщение не пустое
// }else {
//     emitter.emit('message','You don`t create message')
// }
