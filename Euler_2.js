/*
var y;
var sum=0
for(y=0; y<11; y++) {
   sum +=y;
   console.log(sum);
}*/
var even=0
var sum=0
var fib = [1, 2];
for (i=0; i < fib.length; i++) {
    sum = fib[fib.length-2]+fib[fib.length-1];
    if (sum>=4000000) {
          i=fib.length;  
    }
    else {
        fib.push(sum);
    }
}

console.log(fib);

for (i=0; i < fib.length; i++) {
    if (fib[i] % 2 === 0) {
      even+=fib[i];
        console.log(even);
    }
    
}
    
