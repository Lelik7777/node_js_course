console.log('hello from async.js');
//create async function using setTimeout()
const display = (data,callback) => {
  const randomNum=Math.round(Math.random()*10)// generate number from 0 to 10
    const error=randomNum>6?new Error('error'):null;
  setTimeout(()=>{
      callback(error,data);
  },0)
};
console.log('start program');
display('some data',(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('end program');