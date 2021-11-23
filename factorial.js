
var n=5;

function factorial(n){
    if(n===1){
        return 1
    }

    return factorial(n-1)*n
}
var x=factorial(n)
console.log(x);
