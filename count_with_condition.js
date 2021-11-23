var str="1 2 3 4"
var arr=str.split(" ").map(Number)
var target=10
var sum=0
var lowpointer=0
var endpointer=arr.length-1

var count=0

function targetSum(arr,target,lowpointer,endpointer,sum){
    if(sum==target && lowpointer<=endpointer+1){
        count++
    }

    for(var i=lowpointer;i<=endpointer;i++){
         targetSum(arr,target,i+1,endpointer,sum+arr[i])
    }
}

targetSum(arr,target,0,arr.length-1,0)
console.log(count);




function runProgram(input){
    var newInput = input.split("\n");
    var newInputzero=newInput[0].trim().split(" ").map(Number)
    var target=+(newInputzero[1])
    var arr=newInput[1].split(" ").map(Number)
    var count =0
    var sum=0
    var lowpointer=0
var endpointer=arr.length-1

targetSum(arr,target,0,arr.length-1,0)
console.log(count);
   
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});
process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});
