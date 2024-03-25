let h2tag=document.querySelector('h2');
let h3tag=document.querySelector('h3');
let startCount=document.querySelector('.startCount');
let startPrint=document.querySelector('.startPrint');


// startPrint.addEventListener('click',()=>{
//  h2tag.innerHTML +=' Hello Developer Learn Web Worker Api.<br>';
// })



// // slow down the firefox 
// startCount.addEventListener('click',()=>{
//  let sum=0;
//  for(let i=0;i<=100000000000;i++){
//   sum +=i;
//  }
//  h3tag.textContent=sum;
// })



// startPrint.addEventListener('click',()=>{
//  h2tag.innerHTML +=' Hello Developer Learn Web Worker Api.<br>';
// })

window.addEventListener('load',()=>{
 console.log('Load Your Web Browser');
})

let workerObj;
startCount.addEventListener('click',()=>{

if(typeof(Worker) !=='undefined'){

 workerObj=new Worker('./worker.js');
 workerObj.postMessage('Start worker');
 workerObj.onmessage=function(e){
   h3tag.textContent=e.data;
 }
}else{
 alert('Web worker is not support in your browser');
}

})

startPrint.addEventListener('click',()=>{
 h2tag.innerHTML +=' Hello Developer Learn Web Worker Api.<br>';
})