//Take out maximum


// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// input==>10 3
// -1 -1 -2 1 -2 4 1 9 3 9

// out put=21


var k=3
var str=`-1 -1 -2 1 -2 4 1 9 3 9`

var arr=str.split(" ").map(Number)
var max=-Infinity

for(var i=0;i<arr.length-k+1;i++){

    var sum=0
    for(var j=0;j<k;j++){
        sum=sum+arr[i+j]
    }
    if(sum>max){
        max=sum
    }
}
console.log(max);