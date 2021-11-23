

//Such Pair Returns
//For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


// input=>1
// 5 2
// 3 4 0 2 7

// op=>1

var str=`3 4 0 2 7`
var target=2


function  test(str,target) {
    
var arr=str.split(' ').map(Number).sort((a,b)=>{return a-b})


var flag=-1

var low=0
var high=arr.length-1

while(low<high){
    if(arr[low]+arr[high]>target){
        high--
    }
   else if(arr[low]+arr[high]<target){
        low++
    }
    else{
        flag=1
      
        break
    }

}

console.log(flag);
}




function runProgram(input){
    var newInput = input.split("\n");
    for(var i=2;i<newInput.length;i=i+2){
        var data=newInput[i].split(' ').map(Number)
        var target=data[1]
        var str=newInput[i+1]
        test(str,target)
    }
    
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
