
var str1='1 5 7 9'
var str2='2 4 6 8'


function merge(str1,str2){
    var arr1=str1.split(" ").map(Number)
var arr2=str2.split(" ").map(Number)


var arr=[]
var n1=arr1.length;
var n2=arr2.length;

var i=0;
var j=0;
while(i<n1 && j<n2){
    if(arr1[i]<arr2[j]){
        arr.push(arr1[i])
        i++

    }
    else{
        arr.push(arr2[j])
        j++
    }
}

console.log(arr.join(" "));
}



function runProgram(input){
    var newInput = input.split("\n");
    var str1=newInput[0]
    var str2=newInput[1]
    merge(str1,str2)
 
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
