
var x=4
var n=2

function factorial(n){
if(n<=1){
    return 1
}
    
    return n*factorial(n-1)
}

function sequence(x,n){
if(n<=0){
    return 1
}

  return  sequence(x,n-1)+(x**n)/factorial(n)
}

var res=sequence(x,n)
console.log(res.toFixed(4));