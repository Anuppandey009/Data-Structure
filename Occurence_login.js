function runProgram(input){
    var newInput = input.trim().split("\n");

    var data =newInput[0].split(" ").map(Number)
    var key=data[1]
    console.log(key);
    var arr=newInput[1].trim().split(' ').map(Number).sort((a,b)=> a-b)


var low=0
var high=arr.length-1
var count=0
 
 function binary(key)
{while(low<=high){

    var mid=low+Math.floor((high-low)/2)

    if(arr[mid]===key){
        // count++
        return 1
    }
    else if(arr[mid]>key){
        high=mid-1
    }
    else{
        low=mid+1
    }
  
}
return-1
}

var k=binary(key)

console.log(k);
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
runProgram(`6 3
2 3 3 3 6 9`)