console.log('it is async file');

function display(data, callback) {
    const random = Math.random() * 9 + 1;
    const error = random > 6 ? new Error('error because random >6') : null;
    setTimeout(function () {
       callback(error,data);
    });
}

console.log('program start');
display('some data for calculation',(er,data)=>{
   if(er) throw er;
    console.log(data);
});
console.log('program edn');