//этот пример демонстрирует работу под капотом 4 потоков по умолчанию библиотеки,
// т.е. задержка выполнения 5 и 6 криптографических ф-ций связана с тем,что 4 потока заняты,
// когда они освобождаются, то могут запуститься оставшиеся две ф-ции
//этим всем управляет планировщик потоков(thread scheduler )
const crypto = require('crypto');
const start = Date.now();
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('1 end for ', Date.now() - start, 'ms');
});
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('2 end for ', Date.now() - start, 'ms');
});
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('3 end for ', Date.now() - start, 'ms');
});
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('4 end for ', Date.now() - start, 'ms');
});
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('5 end for ', Date.now() - start, 'ms');
});
crypto.pbkdf2('123456', '5', 100000, 64, 'sha512', () => {
    console.log('6 end for ', Date.now() - start, 'ms');
});

//console.log(process.pid)

