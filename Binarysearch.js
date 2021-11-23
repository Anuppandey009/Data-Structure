
var str=`5 4 3 2 10`

var arr=str.split(" ").map(Number)
var key=2

var low=0
var high=arr.length-1

function binary(key){while(low<high){

    var mid=low+Math.floor((high-low)/2)

    if(arr[mid]===key){
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


var res=binary(key)
console.log(res);



// function runProgram(input){
//     var newInput = input.split("\n");
// var data=newInput[0].split(" ").map(Number)
// var key=data[1]
// var arr=newInput[1].split(" ").map(Number)


// }
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//    read += input;
// });
// process.stdin.on("end", function () {
//    read = read.replace(/\n$/,"")
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//    read = read.replace(/\n$/,"")
//    runProgram(read);
//    process.exit(0);
// });

