const {showName}=require('npm-package');
showName('bob');

const{date,name}=require('module2');
console.log('date from module2: ',date);
console.log('name from module2 : ',name);

//импортирую данные из двух модулей,а затем эспортирую их
const morning=require('./morning');
const evening=require('./evening');
module.exports={
    getMessMorning:function () {
        console.log(morning);
    },
    getMessEvening:function () {
        console.log(evening);
    },
    data:'some data',
    num:45,
    user:{who:'user',name:'bob',age:33},
}

