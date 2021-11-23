//  Subarray under condition

//Given an array A, print starting and ending index of all subarrays in the array which has sum 0. (0-indexing)


//input===>6 3 -1 -3 4 -2 2 4 6
// op==>2 4
// 2 6
// 5 6


var str='6 3 -1 -3 4 -2 2 4 6'

function  sum(arr) {
    var x=0;
    for(var i=0;i<arr.length;i++){
        x=x+arr[i]
    }
    return x
}
 
function  print(str) {
    var arr=str.split(' ').map(Number)



for(var i=0;i<arr.length;i++){
    var res=[]
    for(var j=i;j<arr.length;j++){
        res.push(arr[j])
       if(sum(res)==0){
           console.log(i+" "+j);
       }
    }
   
}
}




function runProgram(input){
   var str=input
   print(str)
  
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
