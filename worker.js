self.onmessage=function(e){
  let sum=0;
 for(let i=0;i<=10000000000;i++){
  sum +=i;
 }
 postMessage(sum);
}

// own gec;

// console.log(self);

// disadvantage web worker

// console.log(window);
// console.log(sum);