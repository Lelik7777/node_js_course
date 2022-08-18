console.log('greeting module');
//создание переменной date,доступ к которой можно получить в другом файле через require, а далее nameModule.date
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = (name) => {
    let hour = currentDate.getHours();
    if (hour > 16) {
        return 'good evening, ' + name;
    } else if (hour > 10) {
        return 'good day, ' + name;
    } else return 'good morning, ' + name;
}
module.exports.name='Alice';

