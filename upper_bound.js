
function  Upperbound(arr,key) {
    var low=0
    var high=arr.length-1
    
    var mid;
    while(high-low>1){
        mid=Math.floor((high+low)/2)
        if(arr[mid]<=key){
            low=mid+1
        }
        else{
            high=mid
        }
    }
if(arr[low]>key){
    return low
}
if(arr[high]>key){
    return high
}
else{
    return -1
}

}






function runProgram(input){
    var newInput = input.split("\n");
    var data=newInput[0].split(" ").map(Number)
    var key=data[1]
    var str=newInput[1]
    var arr=str.split(" ").map(Number)

var x= Upperbound(arr,key)
console.log(x);
  
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