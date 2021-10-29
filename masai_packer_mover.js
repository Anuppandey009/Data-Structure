



function runProgram(input){
var newInput = input.split("\n");
 
   var x=newInput[0].split(" ").map(Number)
var weight=x[0]
var truck=x[1]
var arr=newInput[1].split(" ").map(Number);
var count=0
function way(weight){
    if(weight==0){
        count++
    }
if(weight<0){
    return
}
 for(var i=0;i<truck;i++){
   way(weight-arr[i])
 }

}
   way(weight)
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
runProgram(`3 3
1 2 3`)